import { makeAutoObservable } from 'mobx';
import { DataStore } from './DataStore';
import { UIStore } from './UiStore';

export class RootStore {
  public readonly uiStore: UIStore;
  public readonly dataStore: DataStore;

  constructor() {
    this.uiStore = new UIStore(this);
    this.dataStore = new DataStore(this);

    makeAutoObservable(this);
  }
}
