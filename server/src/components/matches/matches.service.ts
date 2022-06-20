import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm/repository/Repository';
import { Match } from './matches.entity';
import { MatcherHandler } from './handlers/matcher.handler';

@Injectable()
export class MatchesService {
  constructor(
    @InjectRepository(Match)
    private matchesRepository: Repository<Match>,
    private matchesHandler: MatcherHandler,
  ) {}
  async getMatches(): Promise<Match[]> {
    return await this.matchesRepository.find();
  }

  findOne(id: number): Promise<Match> {
    return this.matchesRepository.findOne({ where: { id: id } });
  }

  async createMatch(match: Match) {
    this.matchesRepository.save(match);
  }

  async remove(id: string): Promise<void> {
    await this.matchesRepository.delete(id);
  }

  async editMatch(id: number, match: Match): Promise<Match> {
    const editedMatch = await this.matchesRepository.findOne({
      where: { id: id },
    });
    if (!editedMatch) {
      throw new NotFoundException('Match ID is not found');
    }
    editedMatch.consumerStatus = match.consumerStatus;
    editedMatch.supplierStatus = match.supplierStatus;
    await editedMatch.save();
    return editedMatch;
  }

  // @Cron(CronExpression.EVERY_10_MINUTES)
  async handleCron() {
    this.matchesHandler.handle();
  }
}
