import React from 'react';
import { observer } from 'mobx-react';
import View from 'react-native-ui-lib/view';
import Text from 'react-native-ui-lib/text';
import { StyleSheet } from 'react-native';
import { useStore } from '../providers/StoreProvider';
import { FieldComponent } from '../components/Field';

export const StepsPage = observer(() => {
  const { uiStore: { stepsState: { activeStepNumber, steps }, activeStep } } = useStore();
  const { fields } = activeStep;
  return (
    <>
      <View flex>
        <View flex left>
          <View left>
            <Text>Step {activeStepNumber + 1} out of {steps.length}</Text>
          </View>
          <View margin={10}>
            {fields.map((field) => <FieldComponent field={field} key={field.id} />)}
          </View>
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
