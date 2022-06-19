import React from 'react';
import { observer } from 'mobx-react';
import View from 'react-native-ui-lib/view';
import { StyleSheet } from 'react-native';
import { useStore } from '../../providers/StoreProvider';
import { DateTimePicker } from 'react-native-ui-lib';
import { StepField } from '../../consts/types';
import Text from 'react-native-ui-lib/text';

export const TimeRange = observer(({ field }: { field: StepField }) => {
  const { dataStore } = useStore();
  const now = new Date(new Date(new Date().setMinutes(0)).setSeconds(0));

  const updateDate = (date?: Date, fromTime?: Date, toTime?: Date) => {
    dataStore.flowInfo.fields[field.id] = {
      from: new Date(
        fromTime
          ? new Date(date.setHours(fromTime.getHours())).setMinutes(
            fromTime.getMinutes(),
          )
          : date,
      ),
      to: new Date(
        toTime
          ? new Date(date.setHours(toTime.getHours())).setMinutes(
            toTime.getMinutes(),
          )
          : date,
      ),
    };
    console.warn({ data: dataStore.flowInfo.fields[field.id] });
  };

  const updateTime = (fromTime?: Date, toTime?: Date) => {
    if (fromTime) {
      const date = dataStore.flowInfo.fields[field.id]['from'];
      dataStore.flowInfo.fields[field.id]['from'] = new Date(
        new Date(date.setHours(fromTime.getHours())).setMinutes(
          fromTime.getMinutes(),
        ),
      );
    }
    if (toTime) {
      const date = dataStore.flowInfo.fields[field.id]['to'];
      dataStore.flowInfo.fields[field.id]['to'] = new Date(
        new Date(date.setHours(toTime.getHours())).setMinutes(
          toTime.getMinutes(),
        ),
      );
    }
    console.warn({ data: dataStore.flowInfo.fields[field.id] });
  };

  React.useEffect(() => {
    //updateDate(now, now, new Date(new Date(now).setHours(now.getHours() + 2)));
  }, []);

  return (
    <>
      <View flex style={{ width: '100%' }}>
        <Text>When?</Text>
        <DateTimePicker
          // @ts-expect-error
          containerStyle={{ marginVertical: 10 }}
          style={{ width: '100%' }}
          title={'Date'}
          placeholder={'Select a date'}
          dateFormat={'MMM D, YYYY'}
          value={now}
          onChange={(date) => {
            updateDate(date, undefined, undefined);
          }}
        />
        <DateTimePicker
          style={{ width: '100%' }}
          mode={'time'}
          title={'From'}
          placeholder={'Select time'}
          value={now}
          onChange={(date) => {
            updateTime(date, undefined);
          }}
        />
        <DateTimePicker
          style={{ width: '100%' }}
          mode={'time'}
          title={'To'}
          placeholder={'Select time'}
          value={new Date(new Date(now).setHours(now.getHours() + 2))}
          onChange={(date) => {
            updateTime(undefined, date);
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
