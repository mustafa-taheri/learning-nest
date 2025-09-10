import { Injectable, NotFoundException } from '@nestjs/common';

@Injectable()
export class ProductService {
  private products = [
    {
      id: 1,
      name: 'Product 1',
      price: 100,
      description: 'Product 1 description',
    },
    {
      id: 2,
      name: 'Product 2',
      price: 200,
      description: 'Product 2 description',
    },
    {
      id: 3,
      name: 'Product 3',
      price: 300,
      description: 'Product 3 description',
    },
  ];

  getProducts(): Array<any> {
    return this.products;
  }

  getProduct(id: number) {
    console.log(`Product with id ${id}`);
    const product = this.products.find((product) => product.id === id);
    if (!product) throw new NotFoundException('Product not found');
    return product;
  }

  addProduct(data: { name: string; price: number; description: string }): any {
    const newProduct = {
      id: this.products.length + 1,
      ...data,
    };
    this.products.push(newProduct);

    return newProduct;
  }

  updateProduct(id: number, data: any): string {
    console.log(id);
    console.log(this.products);
    const productIndex = this.products.findIndex(
      (product) => product.id === id,
    );
    console.log(productIndex);

    if (productIndex === -1) {
      throw new NotFoundException('Product not found');
    }
    this.products[productIndex] = { ...this.products[productIndex], ...data };
    return 'Product updated';
  }

  patchProduct(
    id: number,
    data: Partial<{ name: string; price: number; description: string }>,
  ) {
    const product = this.getProduct(id);
    if (!product) {
      throw new NotFoundException('Product not found');
    }
    Object.assign(product, data);
    return product;
  }

  deleteProduct(id: number): string {
    const productIndex = this.products.findIndex(
      (product) => product.id === id,
    );
    if (productIndex === -1) {
      throw new NotFoundException('Product not found');
    }
    this.products.splice(productIndex, 1);
    return 'Product deleted';
  }
}
