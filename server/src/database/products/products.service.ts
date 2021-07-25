import { Injectable } from '@nestjs/common';

interface Product {
  readonly id?: number;
  name: string;
  price: number;
  description: string;
}

@Injectable()
export class ProductsService {
  static products: Product[] = [
    {
      id: 1,
      name: 'Product 1',
      price: 100,
      description: 'Some product 1',
    },
    {
      id: 2,
      name: 'Product 2',
      price: 120,
      description: 'Some product 2',
    },
    {
      id: 3,
      name: 'Product 3',
      price: 654,
      description: 'Some product 3',
    },
  ];

  async allProducts(): Promise<Product[]> {
    return ProductsService.products;
  }

  async getAllProductInPriceRange(range: {
    min: number;
    max: number;
  }): Promise<Product[]> {
    return ProductsService.products.filter(
      (prod) => prod.price >= range.min && prod.price <= range.max,
    );
  }

  async updateProduct(product: Product): Promise<Product> {
    const srchProd = ProductsService.products.find(
      (prod) => prod.id === product.id,
    );
    if (!srchProd) {
      throw new Error('Product not found');
    }
    srchProd.price = product.price;
    srchProd.name = product.name;
    srchProd.description = product.description;

    return srchProd;
  }

  async createProduct(product: Product): Promise<Product> {
    const newId = ProductsService.products.length
      ? ProductsService.products[ProductsService.products.length - 1].id + 1
      : 1;
    const newProduct: Product = {
      id: Number(newId),
      ...product,
    };
    ProductsService.products.push(newProduct);
    return newProduct;
  }
}
