import { Module } from '@nestjs/common';

import { TypeOrmModule } from '@nestjs/typeorm';
import { SubCategoriesController } from './subcategories.controller';
import { SubCategoriesService } from './subcategories.service';
import { SubCategory } from './subcategory.entity';

@Module({
  imports: [TypeOrmModule.forFeature([SubCategory])],
  providers: [SubCategoriesService],
  controllers: [SubCategoriesController],
})
export class SubCategoriesModule {}
