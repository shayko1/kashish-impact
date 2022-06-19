import React from 'react';
import { useStore } from '../providers/StoreProvider';
import { observer } from 'mobx-react';
import View from 'react-native-ui-lib/view';
import { NavigationButton } from '../components/NavigationButton';
import { TextField } from 'react-native-ui-lib';
import {ApplicationMode} from '../consts/enums';

export const UserInfoPage = observer(() => {
  const INPUT_SPACING = 10;
  const { uiStore, dataStore } = useStore();
  return (
    <View style={{ flex: 1, width: '100%' }} margin-s5>
      <View center>
        <TextField
          text70
          width="90%"
          containerStyle={{ marginBottom: INPUT_SPACING }}
          title="First Name"
          useTopErrors
          validate={'required'}
          errorMessage="Please fill this input"
        />
        <TextField
          text70
          width="90%"
          containerStyle={{ marginBottom: INPUT_SPACING }}
          title="Family Name"
          useTopErrors
          validate={'required'}
          errorMessage="Please fill this input"
        />
        <TextField
          text70
          width="90%"
          containerStyle={{ marginBottom: INPUT_SPACING }}
          title="Phone Number"
          useTopErrors
          validate={'required'}
          errorMessage="Please fill this input"
        />
      </View>
      <View flex bottom>
        <View flex bottom row center>
          <NavigationButton
            label={'next'}
            onPress={() => uiStore.setApplicationMode(ApplicationMode.CATEGORIES)}
          />
          <NavigationButton
            label={'back'}
            onPress={() => uiStore.clickCategoryPrevButton()}
          />
        </View>
      </View>
    </View>
  );
});