import { Injectable } from '@nestjs/common';
import { Iproduct } from 'src/interfaces/';
//produtos ficticios
const products: Iproduct[] = [
  {
    name: 'Product 1',
    price: 10.99,
    count: 5,
    thumb: 'https://via.placeholder.com/150',
    id: Math.random().toString(32).replace('.', '')
  },
  {
    name: 'Product 2',
    price: 5.99,
    count: 3,
    thumb: 'https://via.placeholder.com/150',
    id: Math.random().toString(32).replace('.', '')
  },
  {
    name: 'Product 3',
    price: 20.99,
    count: 8,
    thumb: 'https://via.placeholder.com/150',
    id: Math.random().toString(32).replace('.', '')
  },
  {
    name: 'Product 4',
    price: 7.99,
    count: 2,
    thumb: 'https://via.placeholder.com/150',
    id: Math.random().toString(32).replace('.', '')
  },
  {
    name: 'Product 5',
    price: 12.99,
    count: 6,
    thumb: 'https://via.placeholder.com/150',
    id: Math.random().toString(32).replace('.', '')
  },
  {
    name: 'Product 6',
    price: 15.99,
    count: 4,
    thumb: 'https://via.placeholder.com/150',
    id: Math.random().toString(32).replace('.', '')
  },
  {
    name: 'Product 7',
    price: 8.99,
    count: 9,
    thumb: 'https://via.placeholder.com/150',
    id: Math.random().toString(32).replace('.', '')
  },
  {
    name: 'Product 8',
    price: 18.99,
    count: 1,
    thumb: 'https://via.placeholder.com/150',
    id: Math.random().toString(32).replace('.', '')
  },
  {
    name: 'Product 9',
    price: 9.99,
    count: 7,
    thumb: 'https://via.placeholder.com/150',
    id: Math.random().toString(32).replace('.', '')
  },
  {
    name: 'Product 10',
    price: 14.99,
    count: 2,
    thumb: 'https://via.placeholder.com/150',
    id: Math.random().toString(32).replace('.', '')
  }
];


@Injectable()
export class ProductService {
  getAllProducts(): Iproduct[] {

    return products;
  }
  getProductFilter(id: string): Iproduct {
    return products.filter(value => value.id == id)[0]
  }
  createProduct(product: Iproduct): void {
    products.push(product)
  }
}

