import { BaseEntity, Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { IsNumber, IsString, Max, MaxLength, Min, MinLength } from 'class-validator';
import { Optional } from '@nestjs/common';
import { Category } from '../categories/category.entity';
import { SubCategory } from '../categories/subcategories/subcategory.entity';
import { ApiProperty } from '@nestjs/swagger';
import { StetpResponse } from '../steps/dto/StepResponse';

@Entity()
export class SupplierInquiry extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  @IsNumber()
  userId: number;

  @ApiProperty()
  @ManyToOne(() => Category, category => category.id)
  categoty: Category;
  
  @Optional()
  @ApiProperty()
  @ManyToOne(() => SubCategory, subCategory => subCategory.id)
  subCategoty: SubCategory;

  @Column("simple-json")
  step_result: {key: string, value: string}

  @Column()
  @IsNumber()
  status: number; // TODO: should be an enum
} 