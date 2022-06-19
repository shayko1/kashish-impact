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
import { ApiOkResponse, ApiProperty } from '@nestjs/swagger';
import { ConsumerInquiriesService } from './consumer-inquiries.service';
import { ConsumerInquiry } from './consumer-inquiry.entity';

@Controller('inquieries/consumer')
export class ConsumerInquiriesController {
  constructor(private consumerInquiriesService: ConsumerInquiriesService) {}

  @Get()
  @ApiOkResponse({
    description: 'Consumer Inquiry object',
    type: ConsumerInquiry,
    isArray: true, // <= diff is here
  })
  findAll() {
    return this.consumerInquiriesService.getConsumerInquiries();
  }

  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id) {
    return this.consumerInquiriesService.findOne(id);
  }

  @Post() create(@Body() inquiry: ConsumerInquiry) {
    return this.consumerInquiriesService.createConsumerInquiry(inquiry);
  }

  @Patch(':id')
  async editUser(
    @Body() inquiry: ConsumerInquiry,
    @Param('id') id: number,
  ): Promise<ConsumerInquiry> {
    const noteEdited = await this.consumerInquiriesService.editConsumerInquiry(
      id,
      inquiry,
    );
    return noteEdited;
  }

  @Delete(':id')
  remove(@Param('id', ParseIntPipe) id) {
    this.consumerInquiriesService.remove(id);
  }
}
