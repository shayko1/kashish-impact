import { StetpResponse } from 'src/components/steps/dto/step-response.dto';
import { SubCategory } from '../subcategories/subcategory.entity';

export interface CategoriesResponse {
  id: string;
  name?: string;
  description?: string;
  icon?: string;
  subCategories?: SubCategory[];
  steps?: StetpResponse[];
}
