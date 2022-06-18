import { Module } from '@nestjs/common';
import { StepsService } from './steps.service';
import { StepsController } from './steps.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Step } from './steps.entity';
import { Category } from '../categories/category.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Step]), TypeOrmModule.forFeature([Category])],
  providers: [StepsService],
  controllers: [StepsController],
})
export class StepsModule {}