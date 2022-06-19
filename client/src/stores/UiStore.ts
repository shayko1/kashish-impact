import { makeAutoObservable } from 'mobx';
import { Category, NewRecordProcessLocationType } from '../consts/types';
import { Wizard, WizardStepStates } from 'react-native-ui-lib';
import { ApplicationMode, UI_STATE, UserType } from '../consts/enums';
import { RootStore } from './Store';

export class UIStore {
  constructor(public readonly rootStore: RootStore) {
    makeAutoObservable(this);
  }

  public error: string;
  public state: UI_STATE = UI_STATE.READY;
  public applicationMode: ApplicationMode = ApplicationMode.USER_TYPE_SELECTION;
  public userType: UserType;
  public categoryState: {
    selectedCategory: Category,
    categoryPath: Category[],
  } = {
      selectedCategory: { id: '', name: '', steps: [], subCategories: [], description: '', icon: '' },
      categoryPath: []
    };
  public wizardState: {
    activeIndex: number,
    completedStepIndex: number,
    steps: { label: string, state: WizardStepStates }[]
  } = {
      activeIndex: 0,
      completedStepIndex: 0,
      steps: [{ label: "step 1", state: Wizard.States.ENABLED }, { label: "step 2", state: Wizard.States.DISABLED }, { label: "step 3", state: Wizard.States.DISABLED }]
    };

  get isLoadingState() {
    return this.state === UI_STATE.LOADING;
  }

  get isErrorState() {
    return this.state === UI_STATE.ERROR;
  }

  get isReadyState() {
    return this.state === UI_STATE.READY;
  }

  get categories() {
    return this.categoryState.selectedCategory.subCategories || [];
  }

  setPageState(state: UI_STATE) {
    this.state = state;
    this.error = null;
  }

  setErrorState(error: string) {
    this.state = UI_STATE.ERROR;
    this.error = error;
  }

  setUserType(userType: UserType) {
    this.userType = userType;
    this.setApplicationMode(ApplicationMode.CATEGORIES);
  }

  setApplicationMode(applicationMode: ApplicationMode) {
    this.applicationMode = applicationMode;
  }

  clickStepsWizardNext = () => {
    this.wizardState.activeIndex++;
    this.wizardState.completedStepIndex++;
  }

  clickStepsWizardPrev = () => {
    if (this.wizardState.activeIndex === 0) {
      this.clickCategoryPrevButton();
      this.setApplicationMode(ApplicationMode.CATEGORIES);
    } else {
      this.wizardState.activeIndex--;
      this.wizardState.completedStepIndex++;
    }
  }

  setSelectedCategory = (category: Category) => {
    this.categoryState.selectedCategory = category;
    this.categoryState.categoryPath.push(category);
    if (this.categoryState.selectedCategory?.steps?.length > 0) {
      this.setApplicationMode(ApplicationMode.WIZARD_STEPS);
    }
  }

  clickCategoryPrevButton = () => {
    this.categoryState.categoryPath.pop();
    if (this.categoryState.categoryPath.length >= 1) {
      this.setSelectedCategory(this.categoryState.categoryPath[this.categoryState.categoryPath.length - 1]);
    } else {
      this.setApplicationMode(ApplicationMode.USER_TYPE_SELECTION);
    }
  }
}
