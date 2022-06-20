import React from 'react';
import { useStore } from '../providers/StoreProvider';
import { observer } from 'mobx-react';
import { LoaderScreen, View } from 'react-native-ui-lib';
import { ApplicationMode, UserType } from '../consts/enums';
import { NavigationButton } from '../components/NavigationButton';

export const InquirySearch = observer(() => {
  const {
    dataStore: { createInquiry, flowInfo },
    uiStore: { userType, setApplicationMode },
  } = useStore();
  React.useEffect(() => {
    void createInquiry();
  }, []);
  const message =
    userType === UserType.CONSUMER
      ? 'Searching for someone who cares for you'
      : 'Searching for a good cause to fill your day with some goodness';
  return (
    <>
      <LoaderScreen message={message} />
      <View>
        <NavigationButton
          label="Cancel"
          onPress={() => setApplicationMode(ApplicationMode.STEPS)}
        />
      </View>
    </>
  );
});
