import React from 'react';
import { Text } from 'react-native';
import { useStore } from '../providers/StoreProvider';
import { observer } from 'mobx-react';

export const LoadingIndication = observer(() => {
  const { uiStore } = useStore();
  return uiStore.isLoadingState ? <Text>Loading....</Text> : null;
});
