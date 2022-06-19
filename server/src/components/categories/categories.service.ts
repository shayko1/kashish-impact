import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm/repository/Repository';
import { StepResponse } from '../steps/dto/step-response.dto';
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
    let steps: StepResponse[];
    const finalResults = [];
    const categories = await this.categoriesRepository.find({
      relations: {
        subCategories: true,
      },
    });
    for (const category of categories) {
      if (category.subCategories.length) {
        for (const subCategory of category.subCategories) {
          steps = await this.stepService.findSteps(category.id, subCategory.id);
          const subCategories = category.subCategories.map((subCategory) => ({
            ...subCategory,
            steps,
          }));
          finalResults.push({
            ...category,
            subCategories,
            steps: [],
          });
        }
      } else {
        steps = await this.stepService.findSteps(category.id, null);
        finalResults.push({ ...category, steps, id: category.id.toString() });
      }
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
