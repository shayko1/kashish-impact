import React from 'react';
import { observer } from 'mobx-react';
import View from 'react-native-ui-lib/view';
import { StyleSheet } from 'react-native';
import { useStore } from '../../providers/StoreProvider';
import { DateTimePicker } from 'react-native-ui-lib';
import { StepField } from '../../consts/types';

export const TimeRange = observer(({ field }: { field: StepField }) => {
  const { dataStore } = useStore();
  const now = new Date(new Date(new Date().setMinutes(0)).setSeconds(0));
  const [date, setDate] = React.useState(now);
  const [fromTime, setFromTime] = React.useState(now);
  const [toTime, setToTime] = React.useState(
    new Date(now.setHours(now.getHours() + 2)),
  );

  const updateDate = () => {
    dataStore.flowInfo.fields[field.id] = {
      from: new Date(
        new Date(date.setHours(fromTime.getHours())).setMinutes(
          fromTime.getMinutes(),
        ),
      ),
      to: new Date(
        new Date(date.setHours(toTime.getHours())).setMinutes(
          toTime.getMinutes(),
        ),
      ),
    };
    console.warn({ data: dataStore.flowInfo.fields[field.id] });
  };

  React.useEffect(() => {
    updateDate();
  }, []);
  return (
    <>
      <View flex>
        <DateTimePicker
          // @ts-expect-error
          containerStyle={{ marginVertical: 10 }}
          title={'Date'}
          placeholder={'Select a date'}
          dateFormat={'MMM D, YYYY'}
          value={now}
          onChange={(date) => {
            setDate(date);
            updateDate();
          }}
        />
        <DateTimePicker
          mode={'time'}
          title={'From'}
          placeholder={'Select time'}
          value={now}
          onChange={(date) => {
            setFromTime(date);
            updateDate();
          }}
        />
        <DateTimePicker
          mode={'time'}
          title={'To'}
          placeholder={'Select time'}
          value={new Date(now.setHours(now.getHours() + 2))}
          onChange={(date) => {
            setToTime(date);
            updateDate();
          }}
        />
      </View>
    </>
  );
});

const styles = StyleSheet.create({
  intentView: {
    width: 300,
    height: 300,
  },
});
