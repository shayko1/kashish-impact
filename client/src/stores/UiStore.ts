import { makeAutoObservable } from 'mobx';
import { Category, Step } from '../consts/types';
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
  public stepsState: {
    activeStepNumber: number,
    steps: Step[],
    dto: { [key: string]: string }
  } = {
      activeStepNumber: 0,
      steps: [],
      dto: {}
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

  get activeStep(): Step {
    return this.stepsState.steps[this.stepsState.activeStepNumber];
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
  }

  setApplicationMode(applicationMode: ApplicationMode) {
    this.applicationMode = applicationMode;
  }

  clickStepsNextButton = () => {
    const isLastStep = this.stepsState.activeStepNumber === (this.stepsState.steps.length - 1);
    if (isLastStep) {
      this.rootStore.dataStore.flowInfo.categoryId = this.categoryState.selectedCategory.id;
      this.setApplicationMode(ApplicationMode.INQUIRY_SEARCH);
    } else {
      this.stepsState.activeStepNumber++;
    }
  }

  clickStepsPrevButton = () => {
    if (this.stepsState.activeStepNumber === 0) {
      this.clickCategoryPrevButton();
      this.setApplicationMode(ApplicationMode.CATEGORIES);
    } else {
      this.stepsState.activeStepNumber--;
    }
  }

  setSelectedCategory = (category: Category) => {
    this.categoryState.selectedCategory = category;
    this.categoryState.categoryPath.push(category);
    if (this.categoryState.selectedCategory?.steps?.length > 0) {
      this.stepsState.steps = this.categoryState.selectedCategory?.steps;
      this.setApplicationMode(ApplicationMode.STEPS);
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
