import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ConsumerInquiry } from './consumer-inquiry.entity';

@Injectable()
export class ConsumerInquiriesService {
  constructor(
    @InjectRepository(ConsumerInquiry)
    private consumerInquriesRepository: Repository<ConsumerInquiry>,
  ) {}
  async getConsumerInquiries(): Promise<ConsumerInquiry[]> {
    return await this.consumerInquriesRepository.find();
  }

  findOne(id: number): Promise<ConsumerInquiry> {
    return this.consumerInquriesRepository.findOne({ where: { id: id } });
  }

  async createConsumerInquiry(inquiry: ConsumerInquiry) {
    this.consumerInquriesRepository.save(inquiry);
  }

  async remove(id: string): Promise<void> {
    await this.consumerInquriesRepository.delete(id);
  }

  async editConsumerInquiry(
    id: number,
    inquiry: ConsumerInquiry,
  ): Promise<ConsumerInquiry> {
    const editInquiry = await this.consumerInquriesRepository.findOne({
      where: { id: id },
    });
    if (!editInquiry) {
      throw new NotFoundException('Consumer inquiry is not found');
    }
    editInquiry.categoryId = inquiry.categoryId;
    editInquiry.subCategoryId = inquiry.subCategoryId;
    editInquiry.step_result = inquiry.step_result;
    editInquiry.status = inquiry.status;
    await editInquiry.save();
    return editInquiry;
  }
}
