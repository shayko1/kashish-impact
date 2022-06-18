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

export const defaultCategories = (): Category[] => [
  {
    id: 1,
    description: 'תיאור של ההסעה',
    name: 'הסעה',
    icon: 'http://',
    subCategories: [
      {
        id: 1,
        description: 'none',
        name: 'none',
        steps: [
          {
            id: 1,
            orderNumber: 1,
            fields: [
              {
                id: 1,
                orderNumber: 1,
                componentName: 'one-or-two-direction-component',
                additionalInfo: null,
              },
              {
                id: 2,
                orderNumber: 2,
                componentName: 'location-from-component',
                additionalInfo: 'add-current-location',
              },
              {
                id: 3,
                orderNumber: 3,
                componentName: 'location-to-component',
              },
            ],
          },
          {
            id: 2,
            orderNumber: 2,
            fields: [
              {
                id: 4,
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
    id: 2,
    name: 'משלוח/איסוף',
    description: 'תיאור של זה',
    icon: 'http://',
    subCategories: [],
  },
  {
    id: 3,
    name: 'ליווי',
    description: 'תיאור של זה',
    icon: 'http://',
    subCategories: [],
  },
  {
    id: 4,
    name: 'עזרה בבית',
    description: 'תיאור של זה',
    icon: 'http://',
    subCategories: [],
  },
];
