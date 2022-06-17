import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm/dist/typeorm.module';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { StepsModule } from './components/steps/steps.module';
import { StepFieldsModule } from './components/steps/stepsFields/stepsFields.module';
import { UsersModule } from './components/users/users.module';
import { CategoriesModule } from './components/categories/categories.module';
import { SubCategoriesModule } from './components/categories/subcategories/subcategories.module';
require('dotenv').config()

@Module({
  imports: [
    TypeOrmModule.forRoot({
      "type": "mysql",
      "host": process.env.HOST,
      "port": 3306,
      "username": "sql11500189",
      "password": "wJy2VHl2h7",
      "database": "sql11500189",
      "entities": ["dist/**/*.entity{.ts,.js}"],
      "synchronize": true
  }),
    UsersModule,
    StepsModule,
    StepFieldsModule,
    CategoriesModule,
    SubCategoriesModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}