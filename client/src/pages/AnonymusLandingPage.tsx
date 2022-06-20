import React from 'react';
import { useStore } from '../providers/StoreProvider';
import { observer } from 'mobx-react';
import View from 'react-native-ui-lib/view';
import { Card } from 'react-native-ui-lib';
import { ApplicationMode, UserType } from '../consts/enums';
import Text from 'react-native-ui-lib/text';

const USER_TYPE_CONTENT = {
  [UserType.CONSUMER]: [
    { text: 'I need help', text30: true, $textDefault: true },
    {
      text: '222 Join Old The Town Barbershop Official Store. Download the Wix app to...',
      text80: true,
      $textDefault: true
    }
  ],
  [UserType.SUPPLIER]: [
    { text: 'I want to help', text30: true, $textDefault: true },
    {
      text: '222 Join Old The Town Barbershop Official Store. Download the Wix app to...',
      text80: true,
      $textDefault: true
    }
  ]
}
export const AnonymusLandingPage = observer(() => {
  return (
    <>
      <View center style={{ width: '100%' }}>
        <Text text60>What Are You Looking For?</Text>
      </View>
      <View style={{ flex: 1, width: '100%' }}>
        <MyIntentCard userType={UserType.CONSUMER} />
        <MyIntentCard userType={UserType.SUPPLIER} />
      </View>
    </>
  );
});

const MyIntentCardCmp = ({
  userType,
}: {
  userType: UserType;
}) => {
  const { uiStore, dataStore } = useStore();
  const content = USER_TYPE_CONTENT[userType];
  return (
    <Card
      style={{ flex: 1, borderWidth: 1, borderColor: '#e8ecf0' }}
      center
      enableShadow={true}
      marginL-20
      marginR-20
      marginT-20
      marginB-20
      onPress={() => {
        uiStore.setUserType(userType);
        dataStore.addTempUser(userType);
        uiStore.setApplicationMode(ApplicationMode.USER_INFO);
      }}
    >
      <Card.Section
        content={content}
        contentStyle={{ alignItems: 'center' }}
      />
    </Card>
  );
};

const MyIntentCard = observer(MyIntentCardCmp);
