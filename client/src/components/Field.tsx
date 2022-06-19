import React from 'react';
import View from 'react-native-ui-lib/view';
import { ComponentType, StepField } from '../consts/types';
import { LoactionTo } from './Fields/LoactionTo';
import { TimeRange } from './Fields/TimeRange';

export const FieldComponent = ({ field }: { field: StepField }) => {
    const { componentName } = field;
    return <View>
        {componentName === ComponentType.LOCATION_TO && <LoactionTo />}
        {componentName === ComponentType.TIME_RANGE && <TimeRange />}
        {componentName === ComponentType.LOCATION_FROM && <View />}
        {componentName === ComponentType.LOCATION_FROM_AND_TO && <View />}
    </View >
};
