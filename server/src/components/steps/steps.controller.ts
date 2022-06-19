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
import { Step } from './steps.entity';
import { StepsService } from './steps.service';
import { StetpUpdateRequest } from './dto/step-upfate-request.dto';
import { StepResponse } from './dto/step-response.dto';

@Controller('steps')
export class StepsController {
  constructor(private stepsService: StepsService) {}

  @Get()
  async findAll(): Promise<StepResponse[]> {
    const result = await this.stepsService.getSteps();
    return result.map((step) => ({
      id: step.id,
      category: step.category,
      subCategory: step.subCategory,
      orderNumber: step.orderNumber,
    }));
  }

  @Get('/:categoryId/:subCategoryId')
  findSteps(
    @Param('categoryId') categoryId: string,
    @Param('subCategoryId') subCategoryId?: string,
  ): Promise<StepResponse[]> {
    return this.stepsService.findSteps(
      Number(categoryId),
      Number(subCategoryId),
    );
  }

  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id) {
    return this.stepsService.findOne(id);
  }

  @Post() create(@Body() step: StetpUpdateRequest) {
    return this.stepsService.createStep(step);
  }

  @Patch(':id')
  async editStep(
    @Body() stetpUpdateRequest: StetpUpdateRequest,
    @Param('id') id: number,
  ): Promise<Step> {
    const stepEdited = await this.stepsService.editStep(id, stetpUpdateRequest);
    return stepEdited;
  }

  @Delete(':id')
  remove(@Param('id', ParseIntPipe) id) {
    this.stepsService.remove(id);
  }
}
