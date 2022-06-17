import { makeAutoObservable } from 'mobx';
import { defaultCategories } from '../../tests/mocks';
import { User } from '../consts/types';
import { RootStore } from './Store';

export class DataStore {
  public user?: User;
  public categories: any[];
  constructor(public readonly rootStore: RootStore) {
    this.categories = defaultCategories();
    this.user = {
      id: 1,
      firstName: 'Steph',
      lastName: 'Curry',
      new_description: 'Best 3 point shutter in the world',
    };

    makeAutoObservable(this);
  }
  get isAnonymous() {
    return !this.user;
  }
}
