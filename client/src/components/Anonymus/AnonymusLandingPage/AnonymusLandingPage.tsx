import React from 'react';
import { Image, TextInput, View } from 'react-native';
import { useStore } from '../../../providers/StoreProvider';
import { observer } from 'mobx-react';

export const AnonymusLandingPage = observer(() => {
  const { uiStore } = useStore();
  return (
    <>
      <View>
        <Image
          source={{
            uri: 'https://reactnative.dev/docs/assets/p_cat2.png',
          }}
          style={{ width: 200, height: 200 }}
        />
      </View>
      <TextInput
        style={{
          height: 40,
          borderColor: 'gray',
          borderWidth: 1,
        }}
        defaultValue="You can type in me"
      />
    </>
  );
});
