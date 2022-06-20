import {
  BaseEntity,
  Column,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { IsNumber } from 'class-validator';
import { Optional } from '@nestjs/common';
import { Category } from '../../categories/category.entity';
import { SubCategory } from '../../categories/subcategories/subcategory.entity';
import { ApiProperty } from '@nestjs/swagger';
import { Status } from '../common/status.enum';

@Entity()
export class SupplierInquiry extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  @ApiProperty()
  @IsNumber()
  userId: number;

  @Column()
  @IsNumber()
  @ApiProperty()
  subCategoryId: number;

  @Column()
  @IsNumber()
  @ApiProperty()
  categoryId: number;

  @ManyToOne(() => Category, (category) => category.id)
  categoty: Category;

  @Optional()
  @ManyToOne(() => SubCategory, (subCategory) => subCategory.id)
  subCategoty: SubCategory;

  @Column('simple-json')
  @ApiProperty()
  step_result: { key: string; value: string };

  @ApiProperty()
  @Column({
    type: 'enum',
    enum: Status,
    default: Status.PENDING,
  })
  status: Status;
}
