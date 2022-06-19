import { makeAutoObservable } from 'mobx';
import { defaultCategories } from '../../tests/mocks';
import { UserType } from '../consts/enums';
import { Category, User } from '../consts/types';
import { RootStore } from './Store';

export class DataStore {
  public user?: User;
  public tempUserData?: User;
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

  addTempUser(type: UserType) {
    this.tempUserData = {
      id: -1,
      firstName: '',
      lastName: '',
      new_description: '',
      phone_number: '',
      type,
    };
  }
}
