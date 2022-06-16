import { BaseEntity, Column, Entity, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import { IsNumber, IsString, MaxLength, MinLength } from 'class-validator';
import { Category } from '../categories/category.entity'
import { ApiProperty } from '@nestjs/swagger';

@Entity()
export class Step extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  @IsNumber()
  @ApiProperty()
  categoryId: number;

  @Column()
  @IsNumber()
  @ApiProperty()
  subCategoryId: number;

  @Column()
  @IsNumber()
  @ApiProperty()
  orderNumber: number;
} 