import React from 'react';
import View from 'react-native-ui-lib/view';
import { Button, Colors } from 'react-native-ui-lib';
import { TouchableOpacityProps } from 'react-native-ui-lib/src/incubator';


export const NavigationButton = ({ label, onPress }: { label: string, onPress: (props?: TouchableOpacityProps | any) => void; }) => (
    <View margin={10}>
        <Button label={label} size={Button.sizes.large} backgroundColor={Colors.blue10} onPress={onPress} />
    </View>
);

