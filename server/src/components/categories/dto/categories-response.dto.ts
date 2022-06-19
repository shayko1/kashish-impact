import { StepResponse } from 'src/components/steps/dto/step-response.dto';

export interface CategoriesResponse {
  id: string;
  name?: string;
  description?: string;
  icon?: string;
  subCategories?: SubCategoriesResponse[];
  steps?: StepResponse[];
}

export interface SubCategoriesResponse {
  id: string;
  name?: string;
  description?: string;
  icon?: string;
  steps?: StepResponse[];
}
