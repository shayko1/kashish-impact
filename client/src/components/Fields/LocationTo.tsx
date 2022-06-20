import React from 'react';
import { observer } from 'mobx-react';
import View from 'react-native-ui-lib/view';
import Text from 'react-native-ui-lib/text';
import { StyleSheet } from 'react-native';
import { useStore } from '../../providers/StoreProvider';
import * as Location from 'expo-location';
import { RadioButton, RadioGroup, TextField } from 'react-native-ui-lib';
import { StepField } from '../../consts/types';


type LocationOption = 'currentLocation' | 'specificLocation';
export const LocationTo = observer(({ field }: { field: StepField }) => {
  const { uiStore: { setErrorState } } = useStore();
  const [locationOption, setLocationOption] = React.useState<LocationOption>('currentLocation');
  const [location, setLocation] = React.useState(null);
  const [errorMsg, setErrorMsg] = React.useState(null);
  const { dataStore } = useStore();
  React.useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        setErrorState('Permission to access location was denied');
        setErrorMsg('Permission to access location was denied')
        return;
      }

      let location = await Location.getCurrentPositionAsync({});
      dataStore.flowInfo.fields[field.id] = JSON.stringify(location);
      setLocation(location);
    })();
  }, []);

  // React.useEffect(() => {
  //   dataStore.flowInfo.fields[field.id] = JSON.stringify(location);
  // }, [location]);

  let text = 'Waiting..';
  if (errorMsg) {
    text = errorMsg;
  } else if (location) {
    text = JSON.stringify(location);
  }

  return (
    <>
      <View>
        <Text>Where?</Text>
        <RadioGroup initialValue={locationOption} onValueChange={(value) => setLocationOption(value)}>
          <RadioButton containerStyle={{ marginVertical: 10 }} value={'currentLocation'} label={'My current location'} />
          <RadioButton containerStyle={{ marginVertical: 10 }} value={'specificLocation'} label={"I'll write the address"} />
        </RadioGroup>
        {locationOption === 'specificLocation' && (
          <TextField
            placeholder={'Address'}
            floatingPlaceholder
            onChangeText={() => console.log('changed')}
            enableErrors
            validate={['required']}
            validationMessage={['Field is required']}
            showCharCounter
            maxLength={30}
          />)}
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
