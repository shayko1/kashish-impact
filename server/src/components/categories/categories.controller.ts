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
import { ApiOkResponse } from '@nestjs/swagger';
import { CategoriesService } from './categories.service';
import { Category } from './category.entity';
import { CategoriesResponse } from './dto/categories-response.dto';

@Controller('categories')
export class CategoriesController {
  constructor(private categoriesService: CategoriesService) {}

  @Get()
  @ApiOkResponse({
    description: 'Category object',
    type: Category,
    isArray: true, // <= diff is here
  })
  findAll(): Promise<CategoriesResponse[]> {
    return this.categoriesService.getCategories();
  }

  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id) {
    return this.categoriesService.findOne(id);
  }

  @Post() create(@Body() user: Category) {
    return this.categoriesService.createCategory(user);
  }

  @Patch(':id')
  async editUser(
    @Body() user: Category,
    @Param('id') id: number,
  ): Promise<Category> {
    const noteEdited = await this.categoriesService.editCategory(id, user);
    return noteEdited;
  }

  @Delete(':id')
  remove(@Param('id', ParseIntPipe) id) {
    this.categoriesService.remove(id);
  }
}
