import { Module } from '@nestjs/common';
import { ProductsResolver } from './products.resolver';
import { ProductsService } from '../../database/products/products.service';

@Module({
  imports: [],
  providers: [ProductsResolver, ProductsService],
  exports: [],
})
export class ProductsModule {}
