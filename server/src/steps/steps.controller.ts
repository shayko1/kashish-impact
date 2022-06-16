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
  
  @Controller('steps')
  export class StepsController {
    constructor(private stepsService: StepsService) {}
  
    @Get()
    findAll() {
      return this.stepsService.getSteps();
    }
  
    @Get(':id')
    findOne(@Param('id', ParseIntPipe) id) {
      return this.stepsService.findOne(id);
    }
  
    @Post() create(@Body() step: Step) {
      return this.stepsService.createStep(step);
    }
  
    @Patch(':id')
    async editStep(@Body() step: Step, @Param('id') id: number): Promise<Step> {
      const stepEdited = await this.stepsService.editStep(id, step);
      return stepEdited;
    }
  
    @Delete(':id')
    remove(@Param('id', ParseIntPipe) id) {
      this.stepsService.remove(id);
    }
  }