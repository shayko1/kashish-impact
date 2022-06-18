import { ApiProperty } from '@nestjs/swagger';
import { Category } from '../../categories/category.entity';



export class StetpResponse {
    @ApiProperty()
    category: Category;
    @ApiProperty()
    subCategoryId: number;
    @ApiProperty()
    orderNumber: number;
  }