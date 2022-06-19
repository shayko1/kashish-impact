import React from 'react';
import { useStore } from '../providers/StoreProvider';
import { observer } from 'mobx-react';
import View from 'react-native-ui-lib/view';
import { Card } from 'react-native-ui-lib';
import { ApplicationMode, UserType } from '../consts/enums';

export const AnonymusLandingPage = observer(() => {
  return (
    <View style={{ flex: 1, width: '100%' }}>
      <MyIntentCard text="I need help" userType={UserType.CONSUMER} />
      <MyIntentCard text="I want to help" userType={UserType.SUPPLIER} />
    </View>
  );
});

const MyIntentCardCmp = ({
  text,
  userType,
}: {
  text: string;
  userType: UserType;
}) => {
  const { uiStore } = useStore();
  return (
    <Card
      style={{ flex: 1, backgroundColor: 'lightblue' }}
      center
      marginL-20
      marginR-20
      marginT-20
      marginB-20
      onPress={() => {
        uiStore.setUserType(userType);
        uiStore.setApplicationMode(ApplicationMode.USER_INFO);
      }}
    >
      <Card.Section
        content={[{ text, text60: true, grey10: true }]}
        contentStyle={{ alignItems: 'center' }}
      />
    </Card>
  );
};

const MyIntentCard = observer(MyIntentCardCmp);
