import { Module } from '@nestjs/common';
import { StepsService } from './steps.service';
import { StepsController } from './steps.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Step } from './steps.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Step])],
  providers: [StepsService],
  controllers: [StepsController],
})
export class StepsModule {}