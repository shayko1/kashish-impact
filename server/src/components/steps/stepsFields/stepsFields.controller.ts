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
  import { StepField } from './stepsFields.entity';
  import { StepFieldsService } from './stepsFields.service';
  
  @Controller('stepFields')
  export class StepFieldsController {
    constructor(private stepFieldsService: StepFieldsService) {}
  
    @Get()
    async findAll() {
      const result = await this.stepFieldsService.getStepFields();
      return result.map(step => ({}))
    }
  
    @Get(':id')
    findOne(@Param('id', ParseIntPipe) id) {
      return this.stepFieldsService.findOne(id);
    }
  
    @Post() create(@Body() stepField: StepField) {
      return this.stepFieldsService.createStepField(stepField);
    }
  
    @Patch(':id')
    async editStepField(@Body() stepField: StepField, @Param('id') id: number): Promise<StepField> {
      const stepFieldEdited = await this.stepFieldsService.editStepField(id, stepField);
      return stepFieldEdited;
    }
  
    @Delete(':id')
    remove(@Param('id', ParseIntPipe) id) {
      this.stepFieldsService.remove(id);
    }
  }