import { makeAutoObservable } from 'mobx';
import { RootStore } from './Store';

export class DataStore {
  public userId?: string;
  public categories: any[];
  constructor(public readonly rootStore: RootStore) {
    makeAutoObservable(this);
  }
  get isAnonymus() {
    return !this.userId;
  }
}
