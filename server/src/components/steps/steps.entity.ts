import {
  BaseEntity,
  Column,
  Entity,
  PrimaryGeneratedColumn,
  ManyToOne,
  JoinColumn,
  OneToMany,
} from 'typeorm';
import { IsNumber } from 'class-validator';
import { Category } from '../categories/category.entity';
import { SubCategory } from '../categories/subcategories/subcategory.entity';
import { ApiProperty } from '@nestjs/swagger';
import { StepField } from './stepsFields/stepsFields.entity';

@Entity()
export class Step extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  @IsNumber()
  @ApiProperty()
  categoryId: number;

  @IsNumber()
  @ApiProperty()
  @ManyToOne(() => Category, (category) => category.id)
  category: Category;

  @Column({ nullable: true })
  @IsNumber()
  @ApiProperty()
  subCategoryId: number;

  @IsNumber()
  @ApiProperty()
  @ManyToOne(() => SubCategory, (subCategory) => subCategory.id)
  subCategory: SubCategory;

  @Column()
  @IsNumber()
  @ApiProperty()
  orderNumber: number;

  @OneToMany(() => StepField, (stepField) => stepField.step)
  @JoinColumn()
  public stepFields: StepField[];
}
