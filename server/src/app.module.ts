import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm/dist/typeorm.module';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { NotesModule } from './notes/notes.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      "type": "mysql",
      "host": "sql11.freemysqlhosting.net",
      "port": 3306,
      "username": "sql11500189",
      "password": "wJy2VHl2h7",
      "database": "sql11500189",
      "entities": ["dist/**/*.entity{.ts,.js}"],
      "synchronize": true
  }),
    NotesModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}