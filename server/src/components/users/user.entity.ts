import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { IsString, MaxLength, MinLength } from 'class-validator';
import { UserType } from '../inquiry/common/users.enum';
import { ApiProperty } from '@nestjs/swagger';

@Entity()
export class User extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @ApiProperty()
  @Column({ length: 150 })
  @MinLength(1)
  @MaxLength(150)
  @IsString()
  firstName: string;

  @ApiProperty()
  @Column()
  @MinLength(1)
  @MaxLength(30)
  @IsString()
  lastName: string;

  @ApiProperty()
  @Column()
  @MinLength(1)
  @MaxLength(30)
  @IsString()
  new_description: string;

  @ApiProperty()
  @Column()
  @MinLength(5)
  @MaxLength(15)
  @IsString()
  phone_number: string;

  @ApiProperty()
  @Column({
    type: 'enum',
    enum: UserType,
  })
  user_type: UserType;

  @ApiProperty()
  @Column()
  @IsString()
  client_id: string;
}
