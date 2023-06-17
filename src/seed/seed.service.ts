import { Injectable } from '@nestjs/common';
import { ProductsService } from 'src/products/products.service';
import { initialData } from './data/seed-data';

@Injectable()
export class SeedService {
  constructor(public readonly productsServices: ProductsService) {}

  async runSeed() {
    await this.insertNewProducts();
    return 'Seed Execute';
  }

  private async insertNewProducts() {
    this.productsServices.deleteaAllProducts();

    const products = initialData.products;

    const insertPromises = [];

    products.forEach((product) => {
      insertPromises.push(this.productsServices.create(product));
    });

    await Promise.all(insertPromises);

    return true;
  }
}
