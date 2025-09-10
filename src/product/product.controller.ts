import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Put,
  UseFilters,
  UseGuards,
} from '@nestjs/common';
import { ProductService } from './product.service';
import { AuthGuard } from 'src/guards/auth/auth.guard';
import { HttpExceptionFilter } from 'src/filter/http-exception/http-exception.filter';

@Controller('product')
@UseFilters(HttpExceptionFilter)
export class ProductController {
  constructor(private readonly productService: ProductService) {}

  @UseGuards(AuthGuard)
  @Get()
  getProducts(): Array<any> {
    return this.productService.getProducts();
  }

  @Get(':id')
  getProduct(@Param('id') id: string) {
    return this.productService.getProduct(Number(id));
  }

  @Post()
  addProduct(
    @Body() data: { name: string; price: number; description: string },
  ): string {
    return this.productService.addProduct(data);
  }

  @Put(':id')
  updateProduct(@Param('id') id: string, @Body() data: any): string {
    return this.productService.updateProduct(Number(id), data);
  }

  @Patch(':id')
  patchProduct(@Param('id') id: string, @Body() data: any) {
    return this.productService.patchProduct(Number(id), data);
  }

  @Delete(':id')
  deleteProduct(@Param('id') id: string): string {
    return this.productService.deleteProduct(Number(id));
  }
}
