import {
  BaseEntity,
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { IsNumber, IsString, MaxLength, MinLength } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
import { Category } from '../category.entity';

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
  @IsNumber()
  @ApiProperty()
  categoryId: number;

  @ManyToOne(() => Category, (category) => category.subCategories)
  @JoinColumn({ name: 'categoryId', referencedColumnName: 'id' })
  public category: Category;
}
