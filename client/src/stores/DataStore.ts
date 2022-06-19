import { makeAutoObservable } from 'mobx';
import { defaultCategories, defaultConsumerUser } from '../../tests/mocks';
import { Category, User } from '../consts/types';
import { RootStore } from './Store';

export class DataStore {
  public user?: User;
  public categories: Category;
  constructor(public readonly rootStore: RootStore) {
    this.categories = defaultCategories();
    // this.user = defaultConsumerUser();
    makeAutoObservable(this);
  }
  get isAnonymous() {
    return !this.user;
  }

  setCategories(categories: Category) {
    this.categories = categories;
  }

}
