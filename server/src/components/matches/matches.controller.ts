import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { ParseIntPipe } from '@nestjs/common/pipes/parse-int.pipe';
import { ApiOkResponse } from '@nestjs/swagger';
import { Match } from './matches.entity';
import { MatchesService } from './matches.service';

@Controller('matches')
export class MatchesController {
  constructor(private matchesService: MatchesService) {}

  @Get()
  @ApiOkResponse({
    description: 'Matches object',
    type: Match,
    isArray: true, // <= diff is here
  })
  findAll() {
    return this.matchesService.getMatches();
  }

  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id) {
    return this.matchesService.findOne(id);
  }

  @Post() create(@Body() match: Match) {
    return this.matchesService.createMatch(match);
  }

  @Patch(':id')
  async editMatch(
    @Body() match: Match,
    @Param('id') id: number,
  ): Promise<Match> {
    const editedMatch = await this.matchesService.editMatch(id, match);
    return editedMatch;
  }

  @Delete(':id')
  remove(@Param('id', ParseIntPipe) id) {
    this.matchesService.remove(id);
  }
}
