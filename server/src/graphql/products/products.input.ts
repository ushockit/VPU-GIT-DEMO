import { Field, InputType } from '@nestjs/graphql';
import { IsNumber, IsString } from 'class-validator';

@InputType()
export class ProductsByPriceInputRequest {
  @Field()
  @IsNumber()
  readonly min: number;

  @Field()
  @IsNumber()
  readonly max: number;
}

@InputType()
export class CreateProductInputRequest {
  @Field()
  @IsString()
  readonly name: string;
  @Field()
  @IsNumber()
  readonly price: number;
  @Field()
  @IsString()
  readonly description: string;
}

@InputType()
export class UpdateProductInputRequest extends CreateProductInputRequest{
  @Field()
  @IsNumber()
  readonly id: number;
}
