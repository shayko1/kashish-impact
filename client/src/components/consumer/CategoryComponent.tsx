import React from 'react';
import { observer } from 'mobx-react';
import { StyleSheet } from 'react-native';
import View from 'react-native-ui-lib/view';
import Text from 'react-native-ui-lib/text';
import Icon from 'react-native-ui-lib/icon';
import { Assets } from 'react-native-ui-lib';
import { Category } from '../../consts/types';
import { useStore } from '../../providers/StoreProvider';

export const CategoryComponent = observer(() => {
  const { dataStore } = useStore();
  const categories: Category[] = dataStore.categories;
  return (
    <>
      <View flex>
        <Icon margin-30 source={Assets.icons.search} />
        <Text>איך אפשר לעזור לך היום?</Text>
        {categories.map((category) => {
          <View style={styles.intentView} br50 margin-s5 bg-blue40 center>
            <Text>{category.name}</Text>
            <Text>{category.description}</Text>
          </View>;
        })}
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
