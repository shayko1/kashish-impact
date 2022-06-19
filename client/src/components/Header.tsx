import React from 'react';
import { Icon, Colors, Text } from 'react-native-ui-lib';
import View from 'react-native-ui-lib/view';

export const Header = () => (
    <View
        backgroundColor={Colors.white}
        bottom
        style={{
            height: 50,
            width: "100%",
        }}>
        <Text text80>KASHISH-IMPACT</Text>
    </View>);
