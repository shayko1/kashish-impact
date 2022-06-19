import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { IsNumber } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
import { Status } from '../inquiry/common/status.enum';

@Entity()
export class Match extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  @ApiProperty()
  @IsNumber()
  consumerInquiryId: number;

  @Column()
  @ApiProperty()
  @IsNumber()
  supplierInquiryId: number;

  @ApiProperty()
  @Column({
    type: 'enum',
    enum: Status,
    default: Status.PENDING,
  })
  consumerStatus: Status;

  @ApiProperty()
  @Column({
    type: 'enum',
    enum: Status,
    default: Status.PENDING,
  })
  supplierStatus: Status;
}
