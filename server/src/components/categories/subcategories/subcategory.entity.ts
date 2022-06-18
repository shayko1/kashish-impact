import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import {
  IsNumber,
  IsString,
  Max,
  MaxLength,
  Min,
  MinLength,
} from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

@Entity()
export class SubCategory extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 150 })
  @MinLength(1)
  @MaxLength(150)
  @IsString()
  @ApiProperty()
  name: string;

  @Column()
  @MinLength(1)
  @IsString()
  @ApiProperty()
  description: string;

  @Column()
  @MinLength(1)
  @IsString()
  @ApiProperty()
  icon: string;

  @Column()
  @MinLength(1)
  @IsNumber()
  @ApiProperty()
  categoryId: number;
}