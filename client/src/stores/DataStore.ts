import { makeAutoObservable } from 'mobx';
import { defaultCategories, defaultConsumerUser } from '../../tests/mocks';
import { User } from '../consts/types';
import { RootStore } from './Store';

export class DataStore {
  public user?: User;
  public categories: any[];
  constructor(public readonly rootStore: RootStore) {
    this.categories = defaultCategories();
    // this.user = defaultConsumerUser();

    makeAutoObservable(this);
  }
  get isAnonymous() {
    return !this.user;
  }
}
