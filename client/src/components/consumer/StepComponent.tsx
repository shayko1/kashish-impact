import React from 'react';
import { observer } from 'mobx-react';
import View from 'react-native-ui-lib/view';
import Text from 'react-native-ui-lib/text';
import { StyleSheet } from 'react-native';
import {Category} from '../../consts/types';
import {defaultCategories} from '../../../tests/mocks';

export const StepComponent = observer(() => {
  const categories: Category[] = defaultCategories();
  return (       
    <>
      <View flex>
        <View style={styles.intentView} br50 margin-s5 bg-blue40 center>
          <Text>categories</Text>
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
