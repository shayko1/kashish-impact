import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { IsNumber, IsString, MaxLength, MinLength } from 'class-validator';

@Entity()
export class Step extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  @IsNumber()
  categoryId: number;

  @Column()
  @IsNumber()
  subCategoryId: number;

  @Column()
  @IsNumber()
  orderNumber: number;
} 