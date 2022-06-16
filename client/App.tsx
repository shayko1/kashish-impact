import React from 'react';
import { ScrollView, View } from 'react-native';
import { StoreProvider } from './src/providers/StoreProvider';
import { RootStore } from './src/stores/store';
import { AnonymusLandingPage } from './src/components/Anonymus/AnonymusLandingPage/AnonymusLandingPage';
import { ErrorComponent } from './src/components/ErrorComponent';
import { LoadingIndication } from './src/components/LoadingIndication';

export default function App() {
  const store = React.useMemo<RootStore>(() => new RootStore(), []);
  return (
    <StoreProvider store={store}>
      <ScrollView>
        <View
          style={{
            marginTop: 50,
            flex: 1,
            backgroundColor: '#fff',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <ErrorComponent />
          <LoadingIndication />
          <AnonymusLandingPage></AnonymusLandingPage>
        </View>
      </ScrollView>
    </StoreProvider>
  );
}
