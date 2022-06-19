import { Module } from '@nestjs/common';

import { TypeOrmModule } from '@nestjs/typeorm';
import { ConsumerInquiriesModule } from '../inquiry/consumerinquiries/consumer-inquiries.module';
import { SupplierInquiriesModule } from '../inquiry/supplierinquiry/supplier-inquiries.module';
import { MatcherHandler } from './handlers/matcher.handler';
import { MatchesController } from './matches.controller';
import { Match } from './matches.entity';
import { MatchesService } from './matches.service';

@Module({
    imports: [
        TypeOrmModule.forFeature([Match]),
        ConsumerInquiriesModule,
        SupplierInquiriesModule],
    providers: [
        MatchesService,
        MatcherHandler
    ],
    controllers: [MatchesController]
})
export class MatchesModule { }
