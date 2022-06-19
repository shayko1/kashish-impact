import { makeAutoObservable } from 'mobx';
import { defaultCategories } from '../../tests/mocks';
import { DataStore } from './DataStore';
import { UIStore } from './UiStore';

export class RootStore {
  public readonly uiStore: UIStore;
  public readonly dataStore: DataStore;

  constructor() {
    this.dataStore = new DataStore(this);
    this.uiStore = new UIStore(this);
    makeAutoObservable(this);
  }

  fetchCategories() {
    const categories = defaultCategories();
    this.dataStore.setCategories(categories);
    this.uiStore.selectedCategory = categories;
  }
}
