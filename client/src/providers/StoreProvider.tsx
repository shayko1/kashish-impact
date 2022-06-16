import React from 'react';
import { RootStore } from '../stores/store';

export const StoreContext = React.createContext<RootStore>(null as any);

export const StoreProvider = ({
  store,
  children,
}: {
  store?: RootStore;
  children?: React.ReactNode;
}) => <StoreContext.Provider value={store}>{children}</StoreContext.Provider>;

export const useStore = () => {
  const store = React.useContext(StoreContext);

  if (!store) {
    throw new Error(
      'Store context was not initialized. Please make sure the application is wrapped in the Store context.',
    );
  }

  return store;
};
