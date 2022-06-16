import { Module } from '@nestjs/common';

import { TypeOrmModule } from '@nestjs/typeorm';


@Module({
  imports: [TypeOrmModule.forFeature([SubCategory])],
  providers: [SubCategoriesService],
  controllers: [SubCategoriesController],
})
export class SubCategoriesModule {}