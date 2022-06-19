import React from 'react';
import { Colors, Text } from 'react-native-ui-lib';
import View from 'react-native-ui-lib/view';

export const Header = () => (
  <View
    backgroundColor={Colors.white}
    bottom
    style={{
      height: 50,
      width: "100%",
    }}
    marginT-10
  >
    <Text center bg-grey50 text80 marginL-20 marginR-20 style={{ height: 25 }}>
      KASHISH IMPACT
    </Text>
  </View>
);
""