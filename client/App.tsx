import React from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import { StoreProvider } from './src/providers/StoreProvider';
import { RootStore } from './src/stores/store';
import { ErrorComponent } from './src/components/ErrorComponent';
import { LoadingIndication } from './src/components/LoadingIndication';
import View from 'react-native-ui-lib/view';
import { Colors } from 'react-native-ui-lib';
import { ApplicationFlow } from './src/components/ApplicationFlow';
import { NativeRouter } from 'react-router-native';
import { Header } from './src/components/Header';

export default function App() {
  const store = React.useMemo<RootStore>(() => new RootStore(), []);
  const { uiStore: { isLoadingState, isErrorState, isReadyState } } = store;
  React.useEffect(
    () => {
      void store.init();
    }
    , []);
  return (
    <StoreProvider store={store}>
      <NativeRouter>
        <View style={styles.mainView} marginT-20>
          <Header />
          {isErrorState && <ErrorComponent />}
          {isLoadingState && <LoadingIndication />}
          {isReadyState && <ApplicationFlow />}
        </View>
      </NativeRouter>
    </StoreProvider>
  );
}

const styles = StyleSheet.create({
  mainView: {
    flex: 1,
    backgroundColor: '#fff',
  },
});

Colors.loadSchemes({
  light: {
    screenBG: 'transparent',
    textColor: Colors.grey10,
    moonOrSun: Colors.yellow30,
    mountainForeground: Colors.green30,
    mountainBackground: Colors.green50
  },
  dark: {
    screenBG: Colors.grey10,
    textColor: Colors.white,
    moonOrSun: Colors.grey80,
    mountainForeground: Colors.violet10,
    mountainBackground: Colors.violet20
  }
});
