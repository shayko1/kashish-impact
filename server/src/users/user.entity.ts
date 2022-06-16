import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { IsString, Max, MaxLength, Min, MinLength } from 'class-validator';

@Entity()
export class User extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 150 })
  @MinLength(1)
  @MaxLength(150)
  @IsString()
  firstName: string;

  @Column()
  @MinLength(1)
  @IsString()
  lastName: string;

  @Column()
  @MinLength(1)
  @IsString()
  new_description: string;
} 