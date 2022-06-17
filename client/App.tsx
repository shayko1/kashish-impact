import React from 'react';
import { ScrollView, View, StyleSheet } from 'react-native';
import { StoreProvider } from './src/providers/StoreProvider';
import { RootStore } from './src/stores/store';
import { ErrorComponent } from './src/components/ErrorComponent';
import { LoadingIndication } from './src/components/LoadingIndication';
import { NativeRouter } from 'react-router-native';
import { AnonymousHome } from './src/components/Anonymous/AnonymusHome';
import { ConsumerHome } from './src/components/consumer/ConsumerHome';
import { SupplierHome } from './src/components/supplier/SupplierHome';
import Text from 'react-native-ui-lib/text';

export default function App() {
  const store = React.useMemo<RootStore>(() => new RootStore(), []);
  return (
    <StoreProvider store={store}>
      <NativeRouter>
        <ScrollView>
          <View style={styles.mainView}>
            <ErrorComponent />
            <LoadingIndication />
            {store.dataStore.isAnonymous ? <AnonymousHome /> : null}
            {store.dataStore.user?.type === 'Consumer' ? (
              <ConsumerHome />
            ) : null}
            {store.dataStore.user?.type === 'Supplier' ? (
              <SupplierHome />
            ) : null}
          </View>
        </ScrollView>
      </NativeRouter>
    </StoreProvider>
  );
}

const styles = StyleSheet.create({
  mainView: {
    marginTop: 50,
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
