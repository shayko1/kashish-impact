import React from 'react';
import { observer } from 'mobx-react';
import View from 'react-native-ui-lib/view';
import Text from 'react-native-ui-lib/text';

export const SubCategoryComponent = observer(() => {
  return (
    <>
      <View flex>
        <Text>subcategory</Text>
      </View>
    </>
  );
});
