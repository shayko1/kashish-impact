import { Module } from '@nestjs/common';

import { TypeOrmModule } from '@nestjs/typeorm';
import { ConsumerInquiriesController } from './consumerinquiries.controller';
import { ConsumerInquiriesService } from './consumerinquiries.service';
import { ConsumerInquiry } from './consumerinquiry.entity';

@Module({
  imports: [TypeOrmModule.forFeature([ConsumerInquiry])],
  providers: [ConsumerInquiriesService],
  controllers: [ConsumerInquiriesController],
})
export class ConsumerInquiriesModule {} 