import React from 'react';
import { observer } from 'mobx-react';
import View from 'react-native-ui-lib/view';
import { StyleSheet } from 'react-native';
import { useStore } from '../../providers/StoreProvider';
import { DateTimePicker } from 'react-native-ui-lib';

export const TimeRange = observer(() => {
  const { uiStore: { activeStep, setErrorState } } = useStore();

  return (
    <>
      <View>
        <DateTimePicker title={'Select time'} placeholder={'Placeholder'} mode={'time'} />
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
