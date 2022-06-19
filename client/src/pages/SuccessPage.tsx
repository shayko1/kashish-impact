import React from 'react';
import { useStore } from '../providers/StoreProvider';
import { observer } from 'mobx-react';
import View from 'react-native-ui-lib/view';

export const SuccessPage = observer(() => {
    const { uiStore: { wizardSteps } } = useStore();
    return (
        <View style={{ flex: 1, width: "100%" }}>

        </View>
    );
});

