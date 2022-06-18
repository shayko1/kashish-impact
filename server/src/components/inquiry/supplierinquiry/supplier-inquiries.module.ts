import { Module } from '@nestjs/common';

import { TypeOrmModule } from '@nestjs/typeorm';
import { SupplierInquiriesController } from './supplierinquiries.controller';
import { SupplierInquiriesService } from './supplierinquiries.service';
import { SupplierInquiry } from './supplierinquiry.entity';

@Module({
  imports: [TypeOrmModule.forFeature([SupplierInquiry])],
  providers: [SupplierInquiriesService],
  controllers: [SupplierInquiriesController],
})
export class SupplierInquiriesModule {} 