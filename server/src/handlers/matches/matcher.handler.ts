import { Injectable } from '@nestjs/common';

@Injectable()
export class MatcherHandler {
    private consumerInquiries;
    private supplierInquiries;

    constructor(consumerInquiries: any, supplierInquiries: any) {
        this.consumerInquiries = consumerInquiries;
        this.supplierInquiries = supplierInquiries;
    }

    handle() {
        // TODO: inject real instances of supplier and customer in order to get data from DB
    }
}
