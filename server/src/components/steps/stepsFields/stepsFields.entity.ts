import {
  BaseEntity,
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { IsNumber, IsString } from 'class-validator';
import { Step } from '../steps.entity';
import { ApiProperty } from '@nestjs/swagger';

@Entity()
export class StepField extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  @IsNumber()
  @ApiProperty()
  stepId: number;

  @Column()
  @IsString()
  @ApiProperty()
  componentName: string;

  @Column()
  @IsString()
  @ApiProperty()
  additionalInfo: string;

  @Column()
  @IsNumber()
  @ApiProperty()
  orderNumber: number;

  @ManyToOne(() => Step, (step) => step.stepFields)
  @JoinColumn({ name: 'stepId', referencedColumnName: 'id' })
  public step: Step;
}
