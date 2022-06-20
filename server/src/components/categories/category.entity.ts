import {
  BaseEntity,
  Column,
  Entity,
  PrimaryGeneratedColumn,
  OneToMany,
  JoinColumn,
} from 'typeorm';
import { IsString, MaxLength, MinLength } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
import { SubCategory } from './subcategories/subcategory.entity';

@Entity()
export class Category extends BaseEntity {
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

  @OneToMany(() => SubCategory, (subCategory) => subCategory.category)
  @JoinColumn()
  subCategories: SubCategory[];
}
