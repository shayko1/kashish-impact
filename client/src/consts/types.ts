import { UserType } from './enums';

export interface FlowInfo {
  category?: Category;
  user?: User;
  fields?: {[key: string]: any};
}

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
  name: string;
  fields: StepField[];
}

export interface StepField {
  id: string;
  componentName: ComponentType;
  additionalInfo?: string;
  orderNumber: number;
}

export interface User {
  id: number;
  firstName: string;
  lastName: string;
  new_description: string;
  type: UserType;
  phone_number: string;
}

export enum ComponentType {
  LOCATION_FROM = 'LOCATION_FROM',
  LOCATION_TO = 'LOCATION_TO',
  LOCATION_FROM_AND_TO = 'LOCATION_FROM_AND_TO',
  TIME_RANGE = 'TIME_RANGE',
}
