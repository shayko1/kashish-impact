export interface Category {
  id: string;
  name?: string;
  description?: string;
  icon?: string;
  subCategories?: Category[];
  steps?: Step[];
}

export interface Step {
  id: string;
  orderNumber: number;
  fields: StepField[];
}

export interface StepField {
  id: string;
  componentName: string;
  additionalInfo?: string;
  orderNumber: number;
}

export interface User {
  id: number;
  firstName: string;
  lastName: string;
  new_description: string;
  type: UserType;
}

export type NewRecordProcessLocationType = 'First' | 'Category' | 'SubCategory' | 'Steps';

export type UserType = 'Consumer' | 'Supplier';