import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { IsNumber, IsString, Max, MaxLength, Min, MinLength } from 'class-validator';
import { Url } from 'url';

@Entity()
export class SubCategory extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 150 })
  @MinLength(1)
  @MaxLength(150)
  @IsString()
  name: string;

  @Column()
  @MinLength(1)
  @IsString()
  description: string;

  @Column()
  @MinLength(1)
  @IsString()
  icon: string;

  @Column()
  @MinLength(1)
  @IsNumber()
  categoryId: number;
}