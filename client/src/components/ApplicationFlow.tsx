import { observer } from 'mobx-react-lite';
import React from 'react';
import { ApplicationMode } from '../consts/enums';
import { AnonymusLandingPage } from '../pages/AnonymusLandingPage';
import { StepsWizard } from '../pages/StepsWizardPage';
import { SuccessPage } from '../pages/SuccessPage';
import { useStore } from '../providers/StoreProvider';
import { CategoryComponent } from './consumer/CategoryComponent';
import { ConsumerHome } from './consumer/ConsumerHome';
import { SubCategoryComponent } from './consumer/SubCategoryComponent';
import { SupplierHome } from './supplier/SupplierHome';

export const ApplicationFlow = observer(() => {
    const { uiStore: { applicationMode } } = useStore();
    return <>
        {applicationMode === ApplicationMode.USER_TYPE_SELECTION && <AnonymusLandingPage />}
        {applicationMode === ApplicationMode.CATEGORIES && <CategoryComponent />}
        {applicationMode === ApplicationMode.WIZARD_STEPS && <StepsWizard />}
        {applicationMode === ApplicationMode.SUCCESS && <SuccessPage />}
    </>
});
