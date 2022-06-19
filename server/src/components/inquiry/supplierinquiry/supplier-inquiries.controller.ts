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
import { SupplierInquiriesService } from './supplier-inquiries.service';
import { SupplierInquiry } from './supplier-inquiry.entity';

@Controller('inquieries/supplier')
export class SupplierInquiriesController {
  constructor(private suplierInquiriesService: SupplierInquiriesService) {}

  @Get()
  @ApiOkResponse({
    description: 'Supplier Inquiry object',
    type: SupplierInquiry,
    isArray: true, // <= diff is here
  })
  findAll() {
    return this.suplierInquiriesService.getSupplierInquiries();
  }

  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id) {
    return this.suplierInquiriesService.findOne(id);
  }

  @Post() create(@Body() inquiry: SupplierInquiry) {
    return this.suplierInquiriesService.createSupplierInquiry(inquiry);
  }

  @Patch(':id')
  async editUser(
    @Body() inquiry: SupplierInquiry,
    @Param('id') id: number,
  ): Promise<SupplierInquiry> {
    const noteEdited = await this.suplierInquiriesService.editSupplierInquiry(
      id,
      inquiry,
    );
    return noteEdited;
  }

  @Delete(':id')
  remove(@Param('id', ParseIntPipe) id) {
    this.suplierInquiriesService.remove(id);
  }
}
