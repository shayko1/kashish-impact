import { Injectable } from '@nestjs/common';
import { ConsumerInquiriesService } from '../../inquiry/consumerinquiries/consumer-inquiries.service';
import { SupplierInquiriesService } from '../../inquiry/supplierinquiry/supplier-inquiries.service';
import { HttpService } from '@nestjs/axios';
import { lastValueFrom } from 'rxjs';
import { AxiosResponse } from 'axios';
import { RootObject } from './distanceMatrixResponse';

@Injectable()
export class MatcherHandler {
  constructor(
    private readonly consumerInquiries: ConsumerInquiriesService,
    private readonly supplierInquiries: SupplierInquiriesService,
    private readonly httpService: HttpService,
  ) {}

  async handle() {
    // https://api.distancematrix.ai/maps/api/distancematrix/json?
    // origins=51.4822656,-0.1933769
    // &destinations=51.4994794,-0.1269979
    // &key=k4S2urGYVLjq49jvhL0vhKSktnMZa

    const baseURL =
      'https://api.distancematrix.ai/maps/api/distancematrix/json';

    const response: Promise<AxiosResponse<RootObject>> = lastValueFrom(
      this.httpService.get(baseURL, {
        params: {
          origins: '51.4822656,-0.1933769',
          destinations: '51.4994794,-0.1269979',
          key: 'k4S2urGYVLjq49jvhL0vhKSktnMZa',
        },
      }),
    );

    console.log((await response).data);
    console.log((await response).data.destination_addresses);
    console.log((await response).data.origin_addresses);
    console.log((await response).data.status);
    console.log(
      (await response).data.rows.forEach((r) =>
        r.elements.forEach((e) => {
          console.log(e.distance);
          console.log(e.duration);
        }),
      ),
    );
  }
}
