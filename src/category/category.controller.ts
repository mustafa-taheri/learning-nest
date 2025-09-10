import { Controller, Get, UseGuards } from '@nestjs/common';
import { CategoryService } from './category.service';
import { AuthGuard } from 'src/guards/auth/auth.guard';
import { RolesGuard } from 'src/guards/roles/roles.guard';
import { Roles } from 'src/guards/roles/roles.decorator';
import { Role } from 'src/guards/roles/roles.enums';

@Controller('category')
export class CategoryController {
  constructor(private readonly categoryService: CategoryService) {}
  @UseGuards(AuthGuard, RolesGuard)
  @Roles(Role.Admin)
  @Get()
  getCategories(): Array<string> {
    return this.categoryService.getCategories();
  }

  //   @Get(':id')
  //   getCategory(@Param('id') id: number): string {
  //     return this.categoryService.getCategory(id);
  //   }

  //   @Post()
  //   addCategory(): string {
  //     return this.categoryService.addCategory();
  //   }

  //   @Put()
  //   updateCategory(): string {
  //     return this.categoryService.updateCategory();
  //   }

  //   @Delete()
  //   deleteCategory(): string {
  //     return this.categoryService.deleteCategory();
  //   }
}
