import React from 'react';
import { useStore } from '../providers/StoreProvider';
import { observer } from 'mobx-react';
import View from 'react-native-ui-lib/view';
import { Button, ButtonSize, Colors, Text, Wizard } from 'react-native-ui-lib';
import { TouchableOpacityProps } from 'react-native-ui-lib/src/incubator';

export const StepsWizard = observer(() => {
    const { uiStore: { clickStepsWizardNext, clickStepsWizardPrev, wizardState: { steps, activeIndex } } } = useStore();
    return (
        <View style={{ flex: 1, width: "100%" }}>
            <Wizard activeIndex={activeIndex}>
                {
                    steps.map((step) => <Wizard.Step state={step.state} label={step.label} key={step.label} />)
                }
            </Wizard>
            <View flex><Text>שלבים מתחלפים כאן</Text></View>
            <View>
                <WizardButton label={'קדימה'} onPress={() => clickStepsWizardNext()} />
                <WizardButton label={'אחורה'} onPress={() => clickStepsWizardPrev()} />
            </View>
        </View>
    );
});

const WizardButton = ({ label, onPress }: { label: string, onPress: (props?: TouchableOpacityProps | any) => void; }) => (
    <View margin={10}>
        <Button label={label} size={Button.sizes.large} backgroundColor={Colors.blue10} onPress={onPress} />
    </View>
);

