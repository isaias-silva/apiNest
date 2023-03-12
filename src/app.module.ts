import { Module } from '@nestjs/common';
import { ProductController } from './controllers/product/product.controller';
import { ProductService } from './controllers/product/product.services';

@Module({
  imports: [],
  controllers: [ProductController],
  providers: [ProductService],
  
})
export class AppModule {}
