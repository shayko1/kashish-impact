import { makeAutoObservable } from 'mobx';
import { UI_STATE } from '../consts/enums';
import { RootStore } from './Store';

export class UIStore {
  constructor(public readonly rootStore: RootStore) {
    makeAutoObservable(this);
  }

  public error: string;
  public state: UI_STATE = UI_STATE.LOADING;
  
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
}
