import { Injectable } from '@nestjs/common';
import { ConsumerInquiriesService } from '../../inquiry/consumerinquiries/consumer-inquiries.service';
import { SupplierInquiriesService } from '../../inquiry/supplierinquiry/supplier-inquiries.service';

@Injectable()
export class MatcherHandler {
  constructor(
    private readonly consumerInquiries: ConsumerInquiriesService,
    private readonly supplierInquiries: SupplierInquiriesService,
  ) {}

  handle() {

  }
  
}
