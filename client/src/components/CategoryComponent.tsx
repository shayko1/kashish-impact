import React from 'react';
import { observer } from 'mobx-react';
import { StyleSheet } from 'react-native';
import View from 'react-native-ui-lib/view';
import Text from 'react-native-ui-lib/text';
import Icon from 'react-native-ui-lib/icon';
import { useStore } from '../providers/StoreProvider';
import { UserType } from '../consts/enums';
import { NavigationButton } from './NavigationButton';
import { Card } from 'react-native-ui-lib';
import { Category } from '../consts/types';
import { TouchableOpacity } from 'react-native-gesture-handler';

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
        <View marginL-20>
          <Icon onPress={() => console.warn('press')} />
          <Text text50>{headerTitle}</Text>
        </View>
        <View flex style={{ width: '100%' }}>
          {categories.map((category) => (
            <CategoryCard category={category} onPress={() => setSelectedCategory(category)} key={category.id} />
          ))}
        </View>
        <View>
          <NavigationButton
            label={'Back'}
            onPress={() => clickCategoryPrevButton()}
          />
        </View>
      </View>
    </>
  );
});

const CategoryCard = ({ category, onPress }: { category: Category, onPress: () => void }) => (
  <Card
    style={{ flex: 1, minHeight: 50, alignItems: 'flex-start', padding: 10, borderWidth: 1, borderColor: '#e8ecf0' }}
    center
    marginL-20
    marginR-20
    marginT-20
    marginB-20
    onPress={onPress}
  >
    <Card.Section
      content={
        [
          { text: category.name, text70: true, $textDefault: true },
          {
            text: category.description,
            text80: true,
            $textDefault: true
          }]}
    >
    </Card.Section>

  </Card>
)

const CategoryCard2 = ({ category, onPress }: { category: Category, onPress: () => void }) => (
  <View
    style={{ borderWidth: 1, minHeight: 50, borderRadius: 10 }}
    flex center
    marginL-20
    marginR-20
    marginT-20
    marginB-20
    onPress={onPress}
  >
    <TouchableOpacity style={{ width: "100%" }}>
      <View flex right>
        <Text>dfdf</Text>
      </View>
    </TouchableOpacity>
  </View>
)

const styles = StyleSheet.create({
  categoryView: {
    flex: 1,
    width: '100%',
    backgroundColor: '#fff',
  },
});
