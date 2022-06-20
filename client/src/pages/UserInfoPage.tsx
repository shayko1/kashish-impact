import React from 'react';
import { useStore } from '../providers/StoreProvider';
import { observer } from 'mobx-react';
import View from 'react-native-ui-lib/view';
import { NavigationButton } from '../components/NavigationButton';
import { TextField } from 'react-native-ui-lib';
import { ApplicationMode } from '../consts/enums';
import { Typography } from 'react-native-ui-lib/src/style/typography';
import { ScrollView, ScrollViewComponent } from 'react-native';

export const UserInfoPage = observer(() => {
  const INPUT_SPACING = 10;
  const { uiStore, dataStore } = useStore();
  return (
    <ScrollView>
      <View style={{ flex: 1, width: '100%', padding: 20 }}>
        <View center>
          <TextField
            titleStyle={{ fontSize: 20 }}
            text60
            width="100%"
            containerStyle={{ marginBottom: INPUT_SPACING }}
            title="First Name"
            useTopErrors
            validate={'required'}
            errorMessage="Please fill this input"
            onChangeText={(text) => (dataStore.flowInfo.user.firstName = text)}
          />
          <TextField
            titleStyle={{ fontSize: 20 }}
            text60
            width="100%"
            containerStyle={{ marginBottom: INPUT_SPACING }}
            title="Family Name"
            useTopErrors
            validate={'required'}
            errorMessage="Please fill this input"
            onChangeText={(text) => (dataStore.flowInfo.user.lastName = text)}
          />
          <TextField
            titleStyle={{ fontSize: 20 }}
            text60
            width="100%"
            containerStyle={{ marginBottom: INPUT_SPACING }}
            title="Phone Number"
            useTopErrors
            validate={'required'}
            minLength={5}
            maxLength={15}
            errorMessage="Please fill this input"
            onChangeText={(text) =>
              (dataStore.flowInfo.user.phone_number = text)
            }
          />
          <TextField
            titleStyle={{ fontSize: 20 }}
            text70
            width="100%"
            containerStyle={{ marginBottom: INPUT_SPACING }}
            title="Description"
            multiline
            onChangeText={(text) =>
              (dataStore.flowInfo.user.new_description = text)
            }
          />
        </View>
        <View flex bottom>
          <NavigationButton
            label={'next'}
            onPress={() => {
              if (
                !!dataStore.flowInfo.user.firstName &&
                !!dataStore.flowInfo.user.lastName &&
                !!dataStore.flowInfo.user.phone_number &&
                dataStore.flowInfo.user.phone_number.length >= 5
              ) {
                uiStore.setApplicationMode(ApplicationMode.CATEGORIES);
              }
            }}
          />
          <NavigationButton
            label={'back'}
            onPress={() => uiStore.clickCategoryPrevButton()}
          />
        </View>
      </View>
    </ScrollView>
  );
});
