import { ApiProperty } from '@nestjs/swagger';


export class StetpUpdateRequest {
    @ApiProperty()
    categoryId: number;
    @ApiProperty()
    subCategoryId: number;
    @ApiProperty()
    orderNumber: number;
  }