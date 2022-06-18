import { Injectable } from '@nestjs/common';
import { ConsumerInquiriesService } from '../../components/inquiry/consumerinquiries/consumer-inquiries.service';
import { SupplierInquiriesService } from '../../components/inquiry/supplierinquiry/supplier-inquiries.service';

@Injectable()
export class MatcherHandler {
  private consumerInquiries: ConsumerInquiriesService;
  private supplierInquiries: SupplierInquiriesService;

  constructor(
    consumerInquiries: ConsumerInquiriesService,
    supplierInquiries: SupplierInquiriesService,
  ) {
    this.consumerInquiries = consumerInquiries;
    this.supplierInquiries = supplierInquiries;
  }

  handle() {
    // TODO: inject real instances of supplier and customer in order to get data from DB
  }
}
