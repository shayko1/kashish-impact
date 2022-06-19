import { StetpResponse } from 'src/components/steps/dto/step-response.dto';

export interface CategoriesResponse {
  id: string;
  name?: string;
  description?: string;
  icon?: string;
  subCategories?: SubCategoriesResponse[];
  steps?: StetpResponse[];
}

export interface SubCategoriesResponse {
  id: string;
  name?: string;
  description?: string;
  icon?: string;
  steps?: StetpResponse[];
}
