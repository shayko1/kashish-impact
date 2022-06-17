import { Category } from '../src/consts/types';

export const defaultCategories = (): Category[] => [
  {
    id: 1,
    description: 'הסעה',
    name: 'תיאור של ההסעה',
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
    description: 'משלוח/איסוף',
    name: 'תיאור של זה',
    icon: 'http://',
    subCategories: [],
  },
  {
    id: 3,
    description: 'ליווי',
    name: 'תיאור של זה',
    icon: 'http://',
    subCategories: [],
  },
  {
    id: 4,
    description: 'עזרה בבית',
    name: 'תיאור של זה',
    icon: 'http://',
    subCategories: [],
  },
];
