
import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Step } from './steps.entity';

@Injectable()
export class StepsService {
  constructor(
    @InjectRepository(Step) private stepsRepository: Repository<Step>,
  ) {}
  async getSteps(): Promise<Step[]> {
    return await this.stepsRepository.find();
  }

  findOne(id: number): Promise<Step> {
    return this.stepsRepository.findOne({ where: {id : id }});
  }

  async createStep(step: Step) {
    this.stepsRepository.save(step);
  }

  async remove(id: string): Promise<void> {
    await this.stepsRepository.delete(id);
  }

  async editStep(id: number, step: Step): Promise<Step> {
    const editedStep = await this.stepsRepository.findOne({ where: {id : id }});
    if (!editedStep) {
      throw new NotFoundException('Step is not found');
    }
    editedStep.orderNumber = step.orderNumber;
    editedStep.subCategoryId = step.subCategoryId;
    editedStep.categoryId = step.categoryId;
    await editedStep.save();
    return editedStep;
  }
}