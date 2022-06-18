import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { StepField } from './stepsFields.entity';

@Injectable()
export class StepFieldsService {
  constructor(
    @InjectRepository(StepField)
    private stepFieldsRepository: Repository<StepField>,
  ) {}
  async getStepFields(): Promise<StepField[]> {
    return await this.stepFieldsRepository.find();
  }

  findOne(id: number): Promise<StepField> {
    return this.stepFieldsRepository.findOne({ where: { id: id } });
  }

  getStepsfieldsbyStepid(stepId: number) {
    this.stepFieldsRepository.findBy({ stepId: stepId });
  }

  async createStepField(stepField: StepField) {
    this.stepFieldsRepository.save(stepField);
  }

  async remove(id: string): Promise<void> {
    await this.stepFieldsRepository.delete(id);
  }

  async editStepField(id: number, stepField: StepField): Promise<StepField> {
    const editedStepField = await this.stepFieldsRepository.findOne({
      where: { id: id },
    });
    if (!editedStepField) {
      throw new NotFoundException('StepField is not found');
    }
    editedStepField.orderNumber = stepField.orderNumber;
    editedStepField.additionalInfo = stepField.additionalInfo;
    editedStepField.componentName = stepField.componentName;
    await editedStepField.save();
    return editedStepField;
  }
}
