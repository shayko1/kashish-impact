import { makeAutoObservable } from 'mobx';
import { defaultCategories } from '../../tests/mocks';
import { userApi } from '../api/user-api';
import { UserType } from '../consts/enums';
import { Category, FlowInfo, User } from '../consts/types';
import { RootStore } from './Store';
import uuid from 'react-native-uuid';
import { inquiryApi } from '../api/inquiry-api';

export class DataStore {
  public user?: User;
  public flowInfo: FlowInfo = { categoryId: undefined, user: null, fields: {} };
  public categories: Category;
  constructor(public readonly rootStore: RootStore) {
    this.categories = defaultCategories();
    makeAutoObservable(this);
  }
  isAnonymous() {
    return !this.user;
  }

  setCategories(categories: Category) {
    this.categories = categories;
  }

  addTempUser(userType: UserType) {
    this.flowInfo.user = {
      firstName: '',
      lastName: '',
      new_description: '',
      phone_number: '',
      user_type: userType,
      client_id: uuid.v4() as string,
    };
  }

  createInquiry = async () => {
    // save user if required
    if (!this.user && this.flowInfo.user) {
      const savedUser = await userApi.setUser(this.flowInfo.user);
      this.user = savedUser as User;
      await this.rootStore.storage.save({
        key: 'userData',
        data: this.user,
      });
    }

    // add inquiry
    await inquiryApi.addInquiry(this.user.user_type, {
      userId: this.user.id,
      categoryId: this.flowInfo.categoryId,
      step_result: this.flowInfo.fields,
      status: 'pending',
    });
  };
}
