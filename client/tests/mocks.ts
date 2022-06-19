import { Category, User } from '../src/consts/types';

export const defaultConsumerUser = (): User => ({
  id: 1,
  firstName: 'Steph',
  lastName: 'Curry',
  new_description: 'Best 3 point shutter in the world',
  type: 'Consumer',
});

export const defaultSupplierUser = (): User => ({
  id: 1,
  firstName: 'Steph',
  lastName: 'Curry',
  new_description: 'Best 3 point shutter in the world',
  type: 'Supplier',
});

export const defaultCategories = (): Category => {
  return {
    id: 'root',
    subCategories: [
      {
        id: '1',
        description: 'תיאור של ההסעה',
        name: 'הסעה',
        icon: 'http://',
        subCategories: [
          {
            id: '2',
            description: 'none',
            name: 'none',
            steps: [
              {
                id: '3',
                orderNumber: 1,
                fields: [
                  {
                    id: '4',
                    orderNumber: 1,
                    componentName: 'one-or-two-direction-component',
                    additionalInfo: null,
                  },
                  {
                    id: '5',
                    orderNumber: 2,
                    componentName: 'location-from-component',
                    additionalInfo: 'add-current-location',
                  },
                  {
                    id: '6',
                    orderNumber: 3,
                    componentName: 'location-to-component',
                  },
                ],
              },
              {
                id: '7',
                orderNumber: 2,
                fields: [
                  {
                    id: '8',
                    orderNumber: 1,
                    componentName: 'time-range-component',
                    additionalInfo: null,
                  },
                ],
              },
            ],
          },
        ],
      },
      {
        id: '9',
        name: 'משלוח/איסוף',
        description: 'תיאור של זה',
        icon: 'http://',
        subCategories: [],
      },
      {
        id: '10',
        name: 'ליווי',
        description: 'תיאור של זה',
        icon: 'http://',
        subCategories: [],
      },
      {
        id: '11',
        name: 'עזרה בבית',
        description: 'תיאור של זה',
        icon: 'http://',
        subCategories: [],
      },
    ]
  }
};
