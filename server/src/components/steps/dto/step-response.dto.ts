import { ApiProperty } from '@nestjs/swagger';
import { Category } from '../../categories/category.entity';
import { SubCategory } from '../../categories/subcategories/subcategory.entity';
import { StepField } from '../stepsFields/stepsFields.entity';

export class StetpResponse {
  @ApiProperty()
  category: Category;
  @ApiProperty()
  subCategory: SubCategory;
  @ApiProperty()
  orderNumber: number;
  @ApiProperty()
  steoFields?: StepField[];
}
