import React from 'react';
import { observer } from 'mobx-react';
import { StyleSheet } from 'react-native';
import View from 'react-native-ui-lib/view';
import Text from 'react-native-ui-lib/text';
import Icon from 'react-native-ui-lib/icon';
// import { Assets } from 'react-native-ui-lib';
import { Category } from '../../consts/types';
import { useStore } from '../../providers/StoreProvider';
import TouchableOpacity from 'react-native-ui-lib/touchableOpacity';

export const CategoryComponent = observer(() => {
  const { dataStore, uiStore } = useStore();
  const categories: Category[] = dataStore.categories;
  return (
    <>
      <View flex center>
        <View>
          <Icon
            margin-30
            // source={Assets.icons.search}
            onPress={() => console.warn('press')}
          />
          <Text>איך אפשר לעזור לך היום?</Text>
        </View>
        <View center>
          {categories.map((category) => (
            <TouchableOpacity
              key={category.id}
              onPress={() => {
                uiStore.NewRecordProcessLocation =
                  category.subCategories.length === 1 ? 'Steps' : 'SubCategory';
                uiStore.NewRecordStepNumber = 0;
              }}
            >
              <View style={styles.intentView} br50 margin-s5 bg-blue40 center>
                <Text>{category.name}</Text>
                <Text>{category.description}</Text>
              </View>
            </TouchableOpacity>
          ))}
        </View>
      </View>
    </>
  );
});

const styles = StyleSheet.create({
  intentView: {
    width: 300,
    height: 120,
  },
});
