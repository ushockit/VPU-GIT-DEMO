import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { ProductDto } from './dto/product.dto';
import { ProductsService } from '../../database/products/products.service';
import {
  CreateProductInputRequest,
  ProductsByPriceInputRequest,
  UpdateProductInputRequest,
} from './products.input';

@Resolver('products')
export class ProductsResolver {
  constructor(private productsService: ProductsService) {}

  @Query(() => [ProductDto])
  async getAllProducts(): Promise<ProductDto[]> {
    return this.productsService.allProducts();
  }

  @Query(() => [ProductDto])
  async getProductsByPrice(
    @Args('body') body: ProductsByPriceInputRequest,
  ): Promise<ProductDto[]> {
    return this.productsService.getAllProductInPriceRange(body);
  }

  @Mutation(() => ProductDto)
  async createNewProduct(
    @Args('body') body: CreateProductInputRequest,
  ): Promise<ProductDto> {
    return this.productsService.createProduct(body);
  }

  @Mutation(() => ProductDto)
  async updateProduct(
    @Args('body') body: UpdateProductInputRequest,
  ): Promise<ProductDto> {
    return this.productsService.updateProduct(body);
  }
}
