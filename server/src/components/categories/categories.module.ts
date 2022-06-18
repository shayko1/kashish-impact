import { Module } from '@nestjs/common';

import { TypeOrmModule } from '@nestjs/typeorm';
import { CategoriesController } from './categories.controller';
import { CategoriesService } from './categories.service';
import { Category } from './category.entity';
import { Step } from '../steps/steps.entity';


@Module({
  imports: [TypeOrmModule.forFeature([Category]), TypeOrmModule.forFeature([Step])],
  providers: [CategoriesService],
  controllers: [CategoriesController],
})
export class CategoriesModule {} 