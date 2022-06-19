import React from 'react';
import { observer } from 'mobx-react';
import { StyleSheet } from 'react-native';
import View from 'react-native-ui-lib/view';
import Text from 'react-native-ui-lib/text';
import Icon from 'react-native-ui-lib/icon';
import { useStore } from '../../providers/StoreProvider';
import TouchableOpacity from 'react-native-ui-lib/touchableOpacity';
import { UserType } from '../../consts/enums';
import { NavigationButton } from '../NavigationButton';

export const CategoryComponent = observer(() => {
  const { uiStore: { setSelectedCategory, clickCategoryPrevButton, categories, userType } } = useStore();
  const headerTitle = userType === UserType.CONSUMER ? "איך אפשר לעזור לך היום?" : "במה תרצה לעזור?"
  return (
    <>
      <View flex center>
        <View>
          <Icon
            margin-30
            onPress={() => console.warn('press')}
          />
          <Text>{headerTitle}</Text>
        </View>
        <View center>
          {categories.map((category) => (
            <TouchableOpacity
              key={category.id}
              onPress={() => {
                setSelectedCategory(category)
              }}
            >
              <View style={styles.intentView} br50 margin-s5 bg-blue50 center>
                <Text>{category.name}</Text>
                <Text>{category.description}</Text>
              </View>
            </TouchableOpacity>
          ))}
        </View>
        <View>
          <NavigationButton label={'אחורה'} onPress={() => clickCategoryPrevButton()} />
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
