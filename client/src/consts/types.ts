export interface Category {
  id: number;
  name: string;
  description: string;
  icon?: string;
  subCategories: SubCategory[];
}

export interface SubCategory {
  id: number;
  name?: string;
  description?: string;
  icon?: string;
  steps: Step[];
}

export interface Step {
  id: number;
  orderNumber: number;
  fields: StepField[];
}

export interface StepField {
  id: number;
  componentName: string;
  additionalInfo?: string;
  orderNumber: number;
}

export interface User {
  id: number;
  firstName: string;
  lastName: string;
  new_description: string;
  type: 'Consumer' | 'Supplier';
}
