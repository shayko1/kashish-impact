import React from 'react';
import { useStore } from '../../providers/StoreProvider';
import { observer } from 'mobx-react';
import { CategoryComponent } from '../CategoryComponent';
import { SubCategoryComponent } from '../consumer/SubCategoryComponent';
import { StepComponent } from '../consumer/StepComponent';
import { AnonymousFirstPage } from './AnonymusFirst';

export const AnonymousHome = observer(() => {
  const { uiStore } = useStore();
  return (
    <>
      {uiStore.NewRecordProcessLocation === 'First' ? (
        <AnonymousFirstPage />
      ) : null}
      {uiStore.NewRecordProcessLocation === 'Category' ? (
        <CategoryComponent />
      ) : null}
      {uiStore.NewRecordProcessLocation === 'SubCategory' ? (
        <SubCategoryComponent />
      ) : null}
      {uiStore.NewRecordProcessLocation === 'Steps' ? <StepComponent /> : null}
    </>
  );
});
