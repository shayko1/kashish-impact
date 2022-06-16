import React from 'react';
import { useStore } from '../../../providers/StoreProvider';
import { observer } from 'mobx-react';
import View from 'react-native-ui-lib/view';
import Text from 'react-native-ui-lib/text';

export const AnonymusLandingPage = observer(() => {
  const { uiStore } = useStore();
  return (
    <>
      <View flex style={{}}>
        <View
          style={{
            width: 300,
            height: 300,
          }}
          br50
          margin-s5
          bg-blue40
          center
        >
          <Text>אפשר עזרה?</Text>
        </View>
        <View
          style={{
            width: 300,
            height: 300,
          }}
          center
          br50
          margin-s5
          bg-blue40
        >
          <Text>בא לי לעזור</Text>
        </View>
      </View>
    </>
  );
});
