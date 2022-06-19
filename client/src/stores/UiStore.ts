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
  public _newRecordProcessLocation: NewRecordProcessLocationType = 'First';
  public _newRecordStepNumber?: number;
  private _applicationMode: ApplicationMode = ApplicationMode.USER_TYPE_SELECTION;
  public userType: UserType;
  public selectedCategory: Category = { id: '', name: '', steps: [], subCategories: [], description: '', icon: '' };
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
    return this.selectedCategory.subCategories || [];
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
    this._applicationMode = applicationMode;
  }

  clickStepsWizardNext = () => {
    this.wizardState.activeIndex++;
    this.wizardState.completedStepIndex++;
  }

  clickStepsWizardPrev = () => {
    this.wizardState.activeIndex--;
    this.wizardState.completedStepIndex++;
  }

  setSelectedCategory = (category: Category) => {
    this.selectedCategory = category;
  }

  get applicationMode() {
    if (this._applicationMode === ApplicationMode.CATEGORIES && this.selectedCategory?.steps?.length > 0) {
      return ApplicationMode.WIZARD_STEPS;
    }
    return this._applicationMode;
  }

  set NewRecordStepNumber(step: number) {
    this._newRecordStepNumber = step;
  }

  get NewRecordStepNumber() {
    return this._newRecordStepNumber;
  }

  set NewRecordProcessLocation(processLocation: NewRecordProcessLocationType) {
    this._newRecordProcessLocation = processLocation;
  }

  get NewRecordProcessLocation() {
    return this._newRecordProcessLocation;
  }
}
