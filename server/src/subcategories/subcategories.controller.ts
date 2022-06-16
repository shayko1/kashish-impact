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
import { SubCategoriesService } from './subcategories.service';
import { SubCategory } from './subcategory.entity';
  
  @Controller('categories/sub')
  export class SubCategoriesController {
    constructor(private subCategoriesService: SubCategoriesService) {}
  
    @Get()
    findAll() {
      return this.subCategoriesService.getUsers();
    }
  
    @Get(':id')
    findOne(@Param('id', ParseIntPipe) id) {
      return this.subCategoriesService.findOne(id);
    }
  
    @Post() create(@Body() subCategory: SubCategory) {
      return this.subCategoriesService.createUser(subCategory);
    }
  
    @Patch(':id')
    async editUser(@Body() subCategory: SubCategory, @Param('id') id: number): Promise<SubCategory> {
      const noteEdited = await this.subCategoriesService.editUser(id, subCategory);
      return noteEdited;
    }
  
    @Delete(':id')
    remove(@Param('id', ParseIntPipe) id) {
      this.subCategoriesService.remove(id);
    }
  }