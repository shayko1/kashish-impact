import { Module } from '@nestjs/common';
import { StepFieldsService } from './stepsFields.service';
import { StepFieldsController } from './stepsFields.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { StepField } from './stepsFields.entity';

@Module({
  imports: [TypeOrmModule.forFeature([StepField])],
  providers: [StepFieldsService],
  controllers: [StepFieldsController],
})
export class StepFieldsModule {}