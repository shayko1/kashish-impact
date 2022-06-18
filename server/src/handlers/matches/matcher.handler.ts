import { Injectable } from '@nestjs/common';
import { ConsumerInquiriesService } from 'src/components/consumerinquiries/consumerinquiries.service';
import { SupplierInquiriesService } from 'src/components/supplierinquiry/supplierinquiries.service';

@Injectable()
export class MatcherHandler {
    private consumerInquiries: ConsumerInquiriesService;
    private supplierInquiries: SupplierInquiriesService;

    constructor(consumerInquiries: ConsumerInquiriesService, supplierInquiries: SupplierInquiriesService) {
        this.consumerInquiries = consumerInquiries;
        this.supplierInquiries = supplierInquiries;
    }

    handle() {
        // TODO: inject real instances of supplier and customer in order to get data from DB
    }
}
