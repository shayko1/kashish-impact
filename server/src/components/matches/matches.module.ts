import { Module } from '@nestjs/common';

import { TypeOrmModule } from '@nestjs/typeorm';
import { MatchesController } from './matches.controller';
import { Match } from './matches.entity';
import { MatchesService } from './matches.service';

@Module({
  imports: [TypeOrmModule.forFeature([Match])],
  providers: [MatchesService],
  controllers: [MatchesController],
})
export class MatchesModule {}
