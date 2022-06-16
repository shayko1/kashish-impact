import React from 'react';
import { Text, View } from 'react-native';
import { useStore } from '../providers/StoreProvider';
import { observer } from 'mobx-react';

export const ErrorComponent = observer(() => {
  const { uiStore } = useStore();
  return uiStore.isErrorState ? (
    <View>
      <Text>{uiStore.error}</Text>
    </View>
  ) : null;
});
