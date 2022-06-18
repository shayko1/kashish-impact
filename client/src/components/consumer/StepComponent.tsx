import React from 'react';
import { observer } from 'mobx-react';
import View from 'react-native-ui-lib/view';
import Text from 'react-native-ui-lib/text';
import { StyleSheet } from 'react-native';
import { useStore } from '../../providers/StoreProvider';

export const StepComponent = observer(() => {
  const { uiStore } = useStore();
  return (
    <>
      <View flex>
        <View style={styles.intentView} br50 margin-s5 bg-blue40 center>
          <Text>step number {uiStore.NewRecordStepNumber}</Text>
        </View>
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
