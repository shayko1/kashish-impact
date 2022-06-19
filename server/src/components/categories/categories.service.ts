import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm/repository/Repository';
import { Category } from './category.entity';
import { CategoriesResponse } from './dto/categories-response.dto';

@Injectable()
export class CategoriesService {
  constructor(
    @InjectRepository(Category)
    private categoriesRepository: Repository<Category>,
  ) {}
  async getCategories(): Promise<CategoriesResponse[]> {
    const result = await this.categoriesRepository.find({
      relations: {
        subCategories: true,
      },
    });
    return result.map((r) => ({
      id: r.id.toString(),
      name: r.name,
      description: r.description,
      icon: r.icon,
      subCategories: r.subCategories,
    }));
  }

  findOne(id: number): Promise<Category> {
    return this.categoriesRepository.findOne({ where: { id: id } });
  }

  async createCategory(category: Category) {
    this.categoriesRepository.save(category);
  }

  async remove(id: string): Promise<void> {
    await this.categoriesRepository.delete(id);
  }

  async editCategory(id: number, category: Category): Promise<Category> {
    const editUser = await this.categoriesRepository.findOne({
      where: { id: id },
    });
    if (!editUser) {
      throw new NotFoundException('User is not found');
    }
    editUser.name = category.name;
    editUser.description = category.description;
    await editUser.save();
    return editUser;
  }
}
