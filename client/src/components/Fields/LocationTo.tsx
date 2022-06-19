import React from 'react';
import { observer } from 'mobx-react';
import View from 'react-native-ui-lib/view';
import Text from 'react-native-ui-lib/text';
import { StyleSheet } from 'react-native';
import { useStore } from '../../providers/StoreProvider';
import * as Location from 'expo-location';

export const LocationTo = observer(() => {
  const { uiStore: { activeStep, setErrorState } } = useStore();
  const [location, setLocation] = React.useState(null);
  const [errorMsg, setErrorMsg] = React.useState(null);
  React.useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        setErrorState('Permission to access location was denied');
        setErrorMsg('Permission to access location was denied')
        return;
      }

      let location = await Location.getCurrentPositionAsync({});
      setLocation(location);
    })();
  }, []);

  let text = 'Waiting..';
  if (errorMsg) {
    text = errorMsg;
  } else if (location) {
    text = JSON.stringify(location);
  }

  return (
    <>
      <View>
        <Text>{text}</Text>
      </View>
    </>
  );
});

const styles = StyleSheet.create({
  intentView: {
    width: 300,
    height: 300,
  },
});
