import {
  BaseEntity,
  Column,
  Entity,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import {
  IsNumber,
  IsString,
  Max,
  MaxLength,
  Min,
  MinLength,
} from 'class-validator';
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

  @ApiProperty()
  @ManyToOne(() => Category, (category) => category.id)
  categoty: Category;

  @Optional()
  @ApiProperty()
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
