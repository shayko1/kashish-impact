import React, { useState } from 'react';
import { useStore } from '../../providers/StoreProvider';
import { observer } from 'mobx-react';
import View from 'react-native-ui-lib/view';
import Text from 'react-native-ui-lib/text';
import { StyleSheet } from 'react-native';

export const AnonymousFirstPage = observer(() => {
  const { uiStore } = useStore();
  return (
    <>
      <View flex>
        <View style={styles.intentView} br50 margin-s5 bg-blue40 center>
          <Text
            on-click={() => (uiStore.NewRecordProcessLocation = 'Category')}
          >
            אפשר עזרה?
          </Text>
        </View>
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
