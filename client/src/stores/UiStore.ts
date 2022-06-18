import { action, makeAutoObservable } from 'mobx';
import { UI_STATE } from '../consts/enums';
import { NewRecordProcessLocationType } from '../consts/types';
import { RootStore } from './Store';

export class UIStore {
  constructor(public readonly rootStore: RootStore) {
    makeAutoObservable(this);
  }

  private error: string;
  private state: UI_STATE = UI_STATE.READY;
  private _newRecordProcessLocation: NewRecordProcessLocationType = 'First';
  private _newRecordStepNumber?: number;

  setPageState(state: UI_STATE) {
    this.state = state;
    this.error = null;
  }

  setErrorState(error: string) {
    this.state = UI_STATE.ERROR;
    this.error = error;
  }

  get isLoadingState() {
    return this.state === UI_STATE.LOADING;
  }

  get isErrorState() {
    return this.state === UI_STATE.ERROR;
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
