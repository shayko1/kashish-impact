import React from 'react';
import { observer } from 'mobx-react';
import View from 'react-native-ui-lib/view';
import Text from 'react-native-ui-lib/text';
import { StyleSheet } from 'react-native';
import { useStore } from '../providers/StoreProvider';
import { FieldComponent } from '../components/Field';
import { NavigationButton } from '../components/NavigationButton';

export const StepsPage = observer(() => {
  const { uiStore: { stepsState: { activeStepNumber, steps }, activeStep, clickStepsNextButton, clickStepsPrevButton } } = useStore();
  const { fields } = activeStep;
  return (
    <>
      <View flex left>
        <View left>
          <Text text60>Step {activeStepNumber + 1} out of {steps.length}</Text>
        </View>
        <View margin={10}>
          {fields.map((field) => <FieldComponent field={field} key={field.id} />)}
        </View>
      </View>
      <View flex bottom>
        <NavigationButton
          label={'Next'}
          onPress={() => clickStepsNextButton()}
        />
        <NavigationButton
          label={'Back'}
          onPress={() => clickStepsPrevButton()}
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
