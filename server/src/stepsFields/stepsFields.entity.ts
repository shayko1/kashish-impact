import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { IsNumber, IsString, MaxLength, MinLength } from 'class-validator';

@Entity()
export class StepField extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  @IsNumber()
  stepId: number;

  @Column()
  @IsString()
  componentName: string;

  @Column()
  @IsString()
  additionalInfo: string;

  @Column()
  @IsNumber()
  orderNumber: number;
} 