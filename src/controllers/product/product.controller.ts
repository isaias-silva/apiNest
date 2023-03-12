import { Controller, Get, Injectable, Param, Post } from '@nestjs/common';
import { Iproduct } from 'src/interfaces';
import { ProductService } from './product.services';



@Controller('product')
export class ProductController {
  constructor(private readonly appService: ProductService) { }

  @Get('/allproducts')
  FindAll(): Iproduct[] {
    return this.appService.getAllProducts();
  }
  @Get('/:id')
  FindOne(@Param('id') id: string): Iproduct {
    return this.appService.getProductFilter(id)
  }

}
