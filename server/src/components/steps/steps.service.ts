import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Step } from './steps.entity';
import { Category } from '../categories/category.entity';
import { StetpUpdateRequest } from './dto/step-upfate-request.dto';
@Injectable()
export class StepsService {
  constructor(
    @InjectRepository(Step) private stepsRepository: Repository<Step>,
  ) {}
  async getSteps(): Promise<Step[]> {
    return await this.stepsRepository.find({
      relations: {
        category: true,
        subCategory: true,
      },
    });
  }

  findOne(id: number): Promise<Step> {
    return this.stepsRepository.findOne({ where: { id: id } });
  }

  async createStep(step: StetpUpdateRequest) {
    this.stepsRepository.save(step);
  }

  async remove(id: string): Promise<void> {
    await this.stepsRepository.delete(id);
  }

  async editStep(
    id: number,
    stetpUpdateRequest: StetpUpdateRequest,
  ): Promise<Step> {
    const editedStep = await this.stepsRepository.findOne({
      where: { id: id },
    });
    if (!editedStep) {
      throw new NotFoundException('Step is not found');
    }

    editedStep.orderNumber = stetpUpdateRequest.orderNumber;
    editedStep.subCategoryId = stetpUpdateRequest.subCategoryId;
    editedStep.categoryId = stetpUpdateRequest.categoryId;
    await editedStep.save();
    return editedStep;
  }
}
