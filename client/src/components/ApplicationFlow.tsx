import { observer } from 'mobx-react-lite';
import React from 'react';
import { ApplicationMode } from '../consts/enums';
import { AnonymusLandingPage } from '../pages/AnonymusLandingPage';
import { StepsPage } from '../pages/StepsPage';
import { SuccessPage } from '../pages/SuccessPage';
import { useStore } from '../providers/StoreProvider';
import { CategoryComponent } from './CategoryComponent';

export const ApplicationFlow = observer(() => {
    const { uiStore: { applicationMode } } = useStore();
    return <>
        {applicationMode === ApplicationMode.USER_TYPE_SELECTION && <AnonymusLandingPage />}
        {applicationMode === ApplicationMode.CATEGORIES && <CategoryComponent />}
        {applicationMode === ApplicationMode.STEPS && <StepsPage />}
        {applicationMode === ApplicationMode.SUCCESS && <SuccessPage />}
    </>
});
