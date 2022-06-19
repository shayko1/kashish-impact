import React from 'react';
import { useStore } from '../providers/StoreProvider';
import { observer } from 'mobx-react';
import View from 'react-native-ui-lib/view';
import Text from 'react-native-ui-lib/text';

export const InquirySearch = observer(() => {
    const { dataStore } = useStore();
    console.log(dataStore.flowInfo.fields);
    console.log(dataStore.flowInfo.categoryId);
    console.log(dataStore.flowInfo.user);
    return (
        <View style={{ flex: 1, width: "100%" }}>
            <Text>
                Finding your Angel
            </Text>
            <Text>
                {JSON.stringify(dataStore.flowInfo.fields)}
            </Text>
            <Text>
                {JSON.stringify(dataStore.flowInfo.categoryId)}
            </Text>
            <Text>
                {JSON.stringify(dataStore.flowInfo.user)}

            </Text>
        </View>
    );
});

