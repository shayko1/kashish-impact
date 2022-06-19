import { Module } from '@nestjs/common';

import { TypeOrmModule } from '@nestjs/typeorm';
import { SupplierInquiriesController } from './supplier-inquiries.controller';
import { SupplierInquiriesService } from './supplier-inquiries.service';
import { SupplierInquiry } from './supplier-inquiry.entity';

@Module({
  imports: [TypeOrmModule.forFeature([SupplierInquiry])],
  providers: [SupplierInquiriesService],
  controllers: [SupplierInquiriesController],
  exports: [SupplierInquiriesService],
})
export class SupplierInquiriesModule {}
