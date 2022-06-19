import { observer } from 'mobx-react-lite';
import React from 'react';
import { ApplicationMode } from '../consts/enums';
import { AnonymusLandingPage } from '../pages/AnonymusLandingPage';
import { InquirySearch } from '../pages/InquirySearch';
import { StepsPage } from '../pages/StepsPage';
import { SuccessPage } from '../pages/SuccessPage';
import {UserInfoPage} from '../pages/UserInfoPage';
import { useStore } from '../providers/StoreProvider';
import { CategoryComponent } from './CategoryComponent';

export const ApplicationFlow = observer(() => {
    const { uiStore: { applicationMode } } = useStore();
    return <>
        {applicationMode === ApplicationMode.USER_TYPE_SELECTION && <AnonymusLandingPage />}
        {applicationMode === ApplicationMode.USER_INFO && <UserInfoPage />}
        {applicationMode === ApplicationMode.CATEGORIES && <CategoryComponent />}
        {applicationMode === ApplicationMode.STEPS && <StepsPage />}
        {applicationMode === ApplicationMode.INQUIRY_SEARCH && <InquirySearch />}
        {applicationMode === ApplicationMode.SUCCESS && <SuccessPage />}
    </>
});
