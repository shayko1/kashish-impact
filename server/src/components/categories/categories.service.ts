import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm/repository/Repository';
import { StepsService } from '../steps/steps.service';
import { Category } from './category.entity';
import { CategoriesResponse } from './dto/categories-response.dto';

@Injectable()
export class CategoriesService {
  constructor(
    @InjectRepository(Category)
    private categoriesRepository: Repository<Category>,
    private readonly stepService: StepsService,
  ) {}
  async getCategories(): Promise<CategoriesResponse[]> {
    const result = await this.categoriesRepository.find({
      relations: {
        subCategories: true,
      },
    });
    const finalResults = [];
    for (let i = 0; i < result.length; i++) {
      const y = await this.stepService.findSteps(result[i].id, 1);
      finalResults.push({
        id: result[i].id.toString(),
        name: result[i].name,
        description: result[i].description,
        icon: result[i].icon,
        subCategories: result[i].subCategories,
        steps: y,
      });
    }
    return finalResults;
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
