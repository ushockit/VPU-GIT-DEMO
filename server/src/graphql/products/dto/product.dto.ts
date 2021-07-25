import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class ProductDto {
  @Field()
  readonly id?: number;
  @Field()
  name: string;
  @Field()
  price: number;
  @Field()
  description: string;
}
