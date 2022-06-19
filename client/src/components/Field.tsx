import React from 'react';
import View from 'react-native-ui-lib/view';
import { ComponentType, StepField } from '../consts/types';
import { LocationTo } from './Fields/LocationTo';
import { TimeRange } from './Fields/TimeRange';

export const FieldComponent = ({ field }: { field: StepField }) => {
    const { componentName } = field;
    return <View>
        {componentName === ComponentType.LOCATION_TO && <LocationTo field={field} />}
        {componentName === ComponentType.TIME_RANGE && <TimeRange field={field} />}
        {componentName === ComponentType.LOCATION_FROM && <View />}
        {componentName === ComponentType.LOCATION_FROM_AND_TO && <View />}
    </View >
};
