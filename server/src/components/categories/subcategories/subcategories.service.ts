import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { SubCategory } from './subcategory.entity';

@Injectable()
export class SubCategoriesService {
  constructor(
    @InjectRepository(SubCategory)
    private categoriesRepository: Repository<SubCategory>,
  ) {}
  async getSubCategories(): Promise<SubCategory[]> {
    return await this.categoriesRepository.find();
  }

  findOne(id: number): Promise<SubCategory> {
    return this.categoriesRepository.findOne({ where: { id: id } });
  }

  async createSubCategory(user: SubCategory) {
    this.categoriesRepository.save(user);
  }

  async remove(id: string): Promise<void> {
    await this.categoriesRepository.delete(id);
  }

  async editSubCategory(
    id: number,
    subCategory: SubCategory,
  ): Promise<SubCategory> {
    const editUser = await this.categoriesRepository.findOne({
      where: { id: id },
    });
    if (!editUser) {
      throw new NotFoundException('User is not found');
    }
    editUser.name = subCategory.name;
    editUser.description = subCategory.description;
    await editUser.save();
    return editUser;
  }
}
