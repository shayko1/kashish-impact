import { Step } from '../../steps/steps.entity';
import { SubCategory } from '../subcategories/subcategory.entity';

export interface CategoriesResponse {
  id: string;
  name?: string;
  description?: string;
  icon?: string;
  subCategories?: SubCategory[];
  steps?: Step[];
}
