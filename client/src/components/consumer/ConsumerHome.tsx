import React from 'react';
import { observer } from 'mobx-react';
import View from 'react-native-ui-lib/view';
import Text from 'react-native-ui-lib/text';

export const ConsumerHome = observer(() => {
  return (
    <>
      <View flex>
        <View>
          <Text>consumer home</Text>
        </View>
      </View>
    </>
  );
});