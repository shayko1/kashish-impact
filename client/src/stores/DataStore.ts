import { makeAutoObservable } from 'mobx';
import { defaultCategories } from '../../tests/mocks';
import { Category, User } from '../consts/types';
import { RootStore } from './Store';

export class DataStore {
  public user?: User;
  public categories: Category;
  constructor(public readonly rootStore: RootStore) {
    this.categories = defaultCategories();
    makeAutoObservable(this);
  }
  get isAnonymous() {
    return !this.user;
  }

  setCategories(categories: Category) {
    this.categories = categories;
  }

  setUser(user: User) {
    this.user = user;
  }
}
