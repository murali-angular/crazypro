import { ProductService } from './../services/product.service';
import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { IProduct } from '../models/product';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

 public products: Observable<IProduct[]> = null;


  constructor( private productservice: ProductService,
               private router: Router) {}

  ngOnInit(): void {
    this.products = this.productservice.getAllProducts();
  }

  deleteProduct(product): void {
   const result =  this.productservice.deleteProduct(product);
   console.log(result);
  }

  viewProduct(product): void {
    this.router.navigate(['products/view/' + product.id]);
  }

}
