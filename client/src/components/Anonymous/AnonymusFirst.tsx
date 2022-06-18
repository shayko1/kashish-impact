import React from 'react';
import { useStore } from '../../providers/StoreProvider';
import { observer } from 'mobx-react';
import View from 'react-native-ui-lib/view';
import Text from 'react-native-ui-lib/text';
import { StyleSheet } from 'react-native';
import TouchableOpacity from 'react-native-ui-lib/touchableOpacity';

export const AnonymousFirstPage = observer(() => {
  const { uiStore } = useStore();
  return (
    <>
      <View flex>
        <TouchableOpacity
          onPress={() => (uiStore.NewRecordProcessLocation = 'Category')}
        >
          <View style={styles.intentView} br50 margin-s5 bg-blue40 center>
            <Text
              on-click={() => (uiStore.NewRecordProcessLocation = 'Category')}
            >
              אפשר עזרה?
            </Text>
          </View>
        </TouchableOpacity>
        <View style={styles.intentView} center br50 margin-s5 bg-blue40>
          <Text>בא לי לעזור</Text>
        </View>
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
