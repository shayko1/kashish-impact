import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm/dist/typeorm.module';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { StepsModule } from './components/steps/steps.module';
import { StepFieldsModule } from './components/steps/stepsFields/stepsFields.module';
import { UsersModule } from './components/users/users.module';
import { CategoriesModule } from './components/categories/categories.module';
import { SubCategoriesModule } from './components/categories/subcategories/subcategories.module';
import { ConsumerInquiriesModule } from './components/inquiry/consumerinquiries/consumer-inquiries.module';
import { SupplierInquiriesModule } from './components/inquiry/supplierinquiry/supplier-inquiries.module';
import { ConfigModule } from '@nestjs/config';
import { MatchesModule } from './components/matches/matches.module';
import { ScheduleModule } from '@nestjs/schedule';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'sql11.freemysqlhosting.net',
      port: 3306,
      username: 'sql11500933',
      password: 'b8zUQB7IiT',
      database: 'sql11500933',
      entities: ['dist/**/*.entity{.ts,.js}'],
      synchronize: true,
    }),
    ConfigModule.forRoot({ isGlobal: true }),
    ScheduleModule.forRoot(),
    UsersModule,
    StepsModule,
    StepFieldsModule,
    CategoriesModule,
    SubCategoriesModule,
    ConsumerInquiriesModule,
    SupplierInquiriesModule,
    MatchesModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}