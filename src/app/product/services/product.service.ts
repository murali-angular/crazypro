import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { max } from 'rxjs/operators';
import { Product, IProduct } from '../models/product';

@Injectable({
  providedIn: 'root'
})


export class ProductService {

  private products: Array<Product> = [
    // tslint:disable-next-line: max-line-length
    { id: 1, name: 'Eastern Mango pickle 500g', code: 'mp500', category: { name: 'mango', code: '1', category: 1 }, unit: { name: 'PCS', code: '1', category: 0 }, purchaseRate: 100, salesRate: 110 },
    // tslint:disable-next-line: max-line-length
    { id: 2, name: 'swad Mango pickle 500g', code: 'mp500', category: { name: 'mango', code: '1', category: 1 }, unit: { name: 'PCS', code: '1', category: 0 }, purchaseRate: 100, salesRate: 110 },
    // tslint:disable-next-line: max-line-length
    { id: 3, name: 'Taste Buds Mango pickle 500g', code: 'mp500', category: { name: 'mango', code: '1', category: 1 }, unit: { name: 'PCS', code: '1', category: 0 }, purchaseRate: 100, salesRate: 110 },
    // tslint:disable-next-line: max-line-length
    { id: 4, name: 'Eastern Garlic pickle 500g', code: 'mp500', category: { name: 'mango', code: '1', category: 1 }, unit: { name: 'PCS', code: '1', category: 0 }, purchaseRate: 100, salesRate: 110 },
    // tslint:disable-next-line: max-line-length
    { id: 5, name: 'Eastern Lemon pickle 500g', code: 'mp500', category: { name: 'mango', code: '1', category: 1 }, unit: { name: 'PCS', code: '1', category: 0 }, purchaseRate: 100, salesRate: 110 },
    // tslint:disable-next-line: max-line-length
    { id: 6, name: 'Eastern Tuna pickle 500g', code: 'mp500', category: { name: 'mango', code: '1', category: 1 }, unit: { name: 'PCS', code: '1', category: 0 }, purchaseRate: 100, salesRate: 110 },
    // tslint:disable-next-line: max-line-length
    { id: 7, name: 'Eastern Serdine pickle 500g', code: 'mp500', category: { name: 'mango', code: '1', category: 1 }, unit: { name: 'PCS', code: '1', category: 0 }, purchaseRate: 100, salesRate: 110 },
    // tslint:disable-next-line: max-line-length
    { id: 8, name: 'Eastern squids pickle 500g', code: 'mp500', category: { name: 'mango', code: '1', category: 1 }, unit: { name: 'PCS', code: '1', category: 0 }, purchaseRate: 100, salesRate: 110 },
    // tslint:disable-next-line: max-line-length
    { id: 9, name: 'Eastern tomoto pickle 500g', code: 'mp500', category: { name: 'mango', code: '1', category: 1 }, unit: { name: 'PCS', code: '1', category: 0 }, purchaseRate: 100, salesRate: 110 },
    // tslint:disable-next-line: max-line-length
    { id: 10, name: 'Melam Mango pickle 500g', code: 'mp500', category: { name: 'mango', code: '1', category: 1 }, unit: { name: 'PCS', code: '1', category: 0 }, purchaseRate: 100, salesRate: 110 },
    // tslint:disable-next-line: max-line-length
    { id: 11, name: 'Kroger Mango pickle 500g', code: 'mp500', category: { name: 'mango', code: '1', category: 1 }, unit: { name: 'PCS', code: '1', category: 0 }, purchaseRate: 100, salesRate: 110 }
  ];

  constructor() { }

  getAllProducts(): Observable<IProduct[]> {
    return of(this.products);
  }

  getProductById(id: number): Observable<IProduct> {
    const product = this.products.find(item => item.id === id);
    return of(product);
  }
  addNewProduct(product: IProduct): void {
    this.products.sort(item => item.id);
    product.id = this.products.length + 1;
    console.log(this.products);
    this.products.push(product);
  }
  deleteProduct(product: IProduct): any{
    const index = this.products.findIndex(item => item.id === product.id);
    const deletedItem = this.products.splice(index, 1);
  }

  updateProduct(product: IProduct): void {
    const index = this.products.findIndex(item => item.id === product.id);
    this.products[index] = product;
  }
}
