import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Step } from './steps.entity';
import { StetpUpdateRequest } from './dto/step-upfate-request.dto';
import { StepResponse } from './dto/step-response.dto';
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
    return this.stepsRepository.findOne({ where: { id } });
  }

  async findSteps(
    categoryId: number,
    subCategoryId?: number,
  ): Promise<StepResponse[]> {
    const result = await this.stepsRepository.find({
      relations: {
        stepFields: true,
      },
      where: { categoryId, subCategoryId },
    });
    return result.map((r) => ({
      category: r.category,
      subCategory: r.subCategory,
      orderNumber: r.orderNumber,
      stepFields: r.stepFields,
    }));
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
