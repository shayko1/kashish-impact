import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { SupplierInquiry } from './supplier-inquiry.entity';

@Injectable()
export class SupplierInquiriesService {
  constructor(
    @InjectRepository(SupplierInquiry)
    private supplierInquriesRepository: Repository<SupplierInquiry>,
  ) {}
  async getSupplierInquiries(): Promise<SupplierInquiry[]> {
    return await this.supplierInquriesRepository.find();
  }

  findOne(id: number): Promise<SupplierInquiry> {
    return this.supplierInquriesRepository.findOne({ where: { id: id } });
  }

  async createSupplierInquiry(inquiry: SupplierInquiry) {
    this.supplierInquriesRepository.save(inquiry);
  }

  async remove(id: string): Promise<void> {
    await this.supplierInquriesRepository.delete(id);
  }

  async editSupplierInquiry(
    id: number,
    inquiry: SupplierInquiry,
  ): Promise<SupplierInquiry> {
    const editInquiry = await this.supplierInquriesRepository.findOne({
      where: { id: id },
    });
    if (!editInquiry) {
      throw new NotFoundException('Supplier inquiry is not found');
    }
    editInquiry.categoryId = inquiry.categoryId;
    editInquiry.subCategoryId = inquiry.subCategoryId;
    editInquiry.step_result = inquiry.step_result;
    editInquiry.status = inquiry.status;
    await editInquiry.save();
    return editInquiry;
  }
}
