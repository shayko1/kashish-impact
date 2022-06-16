
import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class SubCategoriesService {
  constructor(
    @InjectRepository(SubCategory) private categoriesRepository: Repository<SubCategory>,
  ) {}
  async getUsers(): Promise<SubCategory[]> {
    return await this.categoriesRepository.find();
  }

  findOne(id: number): Promise<Category> {
    return this.categoriesRepository.findOne({ where: {id : id }});
  }

  async createUser(user: Category) {
    this.categoriesRepository.save(user);
  }

  async remove(id: string): Promise<void> {
    await this.categoriesRepository.delete(id);
  }

  async editUser(id: number, category: Category): Promise<Category> {
    const editUser = await this.categoriesRepository.findOne({ where: {id : id }});
    if (!editUser) {
      throw new NotFoundException('User is not found');
    }
    editUser.name = category.name;
    editUser.description = category.description;
    await editUser.save();
    return editUser;
  }
}