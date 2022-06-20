import { makeAutoObservable } from 'mobx';
import { defaultCategories } from '../../tests/mocks';
import { DataStore } from './DataStore';
import { UIStore } from './UiStore';
import Storage from 'react-native-storage';
import { createNewStorage } from '../services/storage';
import { User } from '../consts/types';
import { UI_STATE } from '../consts/enums';
import { userApi } from '../api/user-api';

export class RootStore {
  public readonly uiStore: UIStore;
  public readonly dataStore: DataStore;
  public readonly storage: Storage;

  constructor() {
    this.dataStore = new DataStore(this);
    this.uiStore = new UIStore(this);
    this.storage = createNewStorage();
    makeAutoObservable(this);
  }

  fetchCategories() {
    const categories = defaultCategories();
    this.dataStore.setCategories(categories);
    this.uiStore.setSelectedCategory(categories);
  }

  async fetchUser() {
    // check if user already exists
    try {
      const user = await this.storage.load<User>({
        key: 'userData',
      });
      console.log({ user });
      if (user) {
        // fetch user from api
        const savedUser = await userApi.getUser(user.lastName);
        this.dataStore.user = savedUser as User;
      }
      return user;
    } catch (e) {
      // first time user
      // console.error('failed to fetch user', e);
    }
  }
  async init() {
    this.uiStore.state = UI_STATE.LOADING;
    this.fetchCategories();
    await this.fetchUser();
    this.uiStore.state = UI_STATE.READY;
  }
}
