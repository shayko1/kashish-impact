import React from 'react';
import { observer } from 'mobx-react';
import { StyleSheet } from 'react-native';
import View from 'react-native-ui-lib/view';
import Text from 'react-native-ui-lib/text';
import Icon from 'react-native-ui-lib/icon';
import { useStore } from '../providers/StoreProvider';
import TouchableOpacity from 'react-native-ui-lib/touchableOpacity';
import { UserType } from '../consts/enums';
import { NavigationButton } from './NavigationButton';

export const CategoryComponent = observer(() => {
  const {
    uiStore: {
      setSelectedCategory,
      clickCategoryPrevButton,
      categories,
      userType,
    },
  } = useStore();
  const headerTitle =
    userType === UserType.CONSUMER
      ? 'How can we help?'
      : 'How can you help?';
  return (
    <>
      <View style={styles.categoryView}>
        <View>
          <Icon margin-30 onPress={() => console.warn('press')} />
          <Text text50>{headerTitle}</Text>
        </View>
        <View center>
          {categories.map((category) => (
            <TouchableOpacity
              key={category.id}
              onPress={() => {
                setSelectedCategory(category);
              }}
            >
              <View style={styles.intentView} br50 margin-s5 bg-blue50 center>
                <Text text60>{category.name}</Text>
                <Text text70>{category.description}</Text>
              </View>
            </TouchableOpacity>
          ))}
        </View>
        <View>
          <NavigationButton
            label={'אחורה'}
            onPress={() => clickCategoryPrevButton()}
          />
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
  categoryView: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
