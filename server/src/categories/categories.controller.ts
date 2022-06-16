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
import { CategoriesService } from './categories.service';
import { Category } from './category.entity';
  
  @Controller('categories')
  export class CategoriesController {
    constructor(private categoriesService: CategoriesService) {}
  
    @Get()
    findAll() {
      return this.categoriesService.getUsers();
    }
  
    @Get(':id')
    findOne(@Param('id', ParseIntPipe) id) {
      return this.categoriesService.findOne(id);
    }
  
    @Post() create(@Body() user: Category) {
      return this.categoriesService.createUser(user);
    }
  
    @Patch(':id')
    async editUser(@Body() user: Category, @Param('id') id: number): Promise<Category> {
      const noteEdited = await this.categoriesService.editUser(id, user);
      return noteEdited;
    }
  
    @Delete(':id')
    remove(@Param('id', ParseIntPipe) id) {
      this.categoriesService.remove(id);
    }
  } 