import { Module } from '@nestjs/common';

import { TypeOrmModule } from '@nestjs/typeorm';
import { ConsumerInquiriesController } from './consumer-inquiries.controller';
import { ConsumerInquiriesService } from './consumer-inquiries.service';
import { ConsumerInquiry } from './consumer-inquiry.entity';

@Module({
  imports: [TypeOrmModule.forFeature([ConsumerInquiry])],
  providers: [ConsumerInquiriesService],
  controllers: [ConsumerInquiriesController],
  exports: [ConsumerInquiriesService],
})
export class ConsumerInquiriesModule {}
