import { BaseEntity, Column, Entity, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { IsString, Max, MaxLength, Min, MinLength } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
import { Step } from '../steps/steps.entity';


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

  @OneToMany(() => Step, (step) => step.category)
  steps: Step[]
} 