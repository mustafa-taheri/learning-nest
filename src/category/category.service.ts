import { Injectable } from '@nestjs/common';

@Injectable()
export class CategoryService {
  getCategories(): Array<string> {
    return ['Category 1', 'Category 2', 'Category 3'];
  }

  getCategory(id: number): string {
    return `Category with id ${id}`;
  }

  addCategory(): string {
    return 'Category added';
  }

  updateCategory(): string {
    return 'Category updated';
  }

  deleteCategory(): string {
    return 'Category deleted';
  }
}
