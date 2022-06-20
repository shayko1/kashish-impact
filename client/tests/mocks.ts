import { UserType } from '../src/consts/enums';
import { Category, ComponentType, User } from '../src/consts/types';

export const defaultConsumerUser = (): User => ({
  id: 1,
  firstName: 'Steph',
  lastName: 'Curry',
  new_description: 'Best 3 point shutter in the world',
  user_type: UserType.CONSUMER,
  phone_number: '333',
  client_id: '10'
});

export const defaultSupplierUser = (): User => ({
  id: 1,
  firstName: 'Steph',
  lastName: 'Curry',
  new_description: 'Best 3 point shutter in the world',
  user_type: UserType.SUPPLIER,
  phone_number: '333',
  client_id: '11'
});

export const defaultCategories = (): Category => {
  return {
    id: 'root',
    subCategories: [
      {
        id: '11',
        name: 'Help @ Home',
        description: 'Need assistance in the day to day tasks',
        icon: 'http://',
        steps: [
          {
            id: '3',
            orderNumber: 1,
            name: 'Where & When do you want to assist ?',
            fields: [
              {
                id: ComponentType.LOCATION_TO,
                orderNumber: 1,
                componentName: ComponentType.LOCATION_TO,
                additionalInfo: null,
              },
              {
                id: ComponentType.TIME_RANGE,
                orderNumber: 1,
                componentName: ComponentType.TIME_RANGE,
                additionalInfo: null,
              },
            ],
          },
        ],
      },
      {
        id: '1',
        description: 'Help with transformation',
        name: 'Transformation',
        icon: 'http://',
        steps: [
          {
            id: '3',
            orderNumber: 1,
            name: 'Where & When do you want to assist ?',
            fields: [
              {
                id: ComponentType.LOCATION_FROM_AND_TO,
                orderNumber: 1,
                componentName: ComponentType.LOCATION_FROM_AND_TO,
                additionalInfo: null,
              },
              {
                id: ComponentType.LOCATION_TO,
                orderNumber: 2,
                componentName: ComponentType.LOCATION_TO,
                additionalInfo: 'add-current-location',
              },
            ],
          },
          {
            id: '7',
            orderNumber: 2,
            name: '',
            fields: [
              {
                id: ComponentType.TIME_RANGE,
                orderNumber: 1,
                componentName: ComponentType.TIME_RANGE,
                additionalInfo: null,
              },
            ],
          },
        ],
      },
      {
        id: '9',
        name: 'Deliver / Collect',
        description: 'Help by deliver or collect stuff',
        icon: 'http://',
        subCategories: [],
      },
      {
        id: '10',
        name: 'Walk with',
        description: 'Help by joining for day to day task outside the house',
        icon: 'http://',
        subCategories: [],
      },
    ],
  };
};
