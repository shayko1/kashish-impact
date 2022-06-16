import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { IsNumber, IsString, MaxLength, MinLength } from 'class-validator';

@Entity()
export class Step extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  @MinLength(1)
  @IsNumber()
  categoryId: number;

  @Column()
  @MinLength(1)
  @IsNumber()
  subCategoryId: number;

  @Column()
  @MinLength(1)
  @IsNumber()
  orderNumber: number;
} 