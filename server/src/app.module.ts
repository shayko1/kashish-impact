import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm/dist/typeorm.module';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { StepsModule } from './components/steps/steps.module';
import { StepFieldsModule } from './components/steps/stepsFields/stepsFields.module';
import { UsersModule } from './components/users/users.module';
import { CategoriesModule } from './components/categories/categories.module';
import { SubCategoriesModule } from './components/categories/subcategories/subcategories.module';
import { ConsumerInquiriesModule } from './components/inquiry/consumerinquiries/consumerinquiries.module';
import { SupplierInquiriesModule } from './components/inquiry/supplierinquiry/supplierinquiries.module';
import { ConfigModule } from '@nestjs/config';


@Module({
  imports: [
    TypeOrmModule.forRoot({
      "type": "mysql",
      "host": process.env.HOST,
      "port": 3306,
      "username": "root",
      "password": "password",
      "database": "test",
      "entities": ["dist/**/*.entity{.ts,.js}"],
      "synchronize": true
  }),
    ConfigModule.forRoot({isGlobal: true}),
    UsersModule,
    StepsModule,
    StepFieldsModule,
    CategoriesModule,
    SubCategoriesModule,
    ConsumerInquiriesModule,
    SupplierInquiriesModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}