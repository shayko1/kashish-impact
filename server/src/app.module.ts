import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm/dist/typeorm.module';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { NotesModule } from './notes/notes.module';
import { StepsModule } from './steps/steps.module';
import { StepFieldsModule } from './stepsFields/stepsFields.module';
import { UsersModule } from './users/users.module';
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
    NotesModule,
    UsersModule,
    StepsModule,
    StepFieldsModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}