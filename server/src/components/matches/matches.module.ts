import { TypeOrmModule } from '@nestjs/typeorm';
import { ConsumerInquiriesModule } from '../inquiry/consumerinquiries/consumer-inquiries.module';
import { SupplierInquiriesModule } from '../inquiry/supplierinquiry/supplier-inquiries.module';
import { MatcherHandler } from './handlers/matcher.handler';
import { MatchesController } from './matches.controller';
import { Match } from './matches.entity';
import { MatchesService } from './matches.service';
import { HttpModule } from '@nestjs/axios';
import { Module } from '@nestjs/common';

@Module({
    imports: [
        TypeOrmModule.forFeature([Match]),
        ConsumerInquiriesModule,
        SupplierInquiriesModule,
        HttpModule,
    ],
    providers: [
        MatchesService,
        MatcherHandler
    ],
    controllers: [MatchesController]
})
export class MatchesModule {}
