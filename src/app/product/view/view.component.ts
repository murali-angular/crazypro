
import { ProductService } from './../services/product.service';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import {  IProduct } from '../models/product';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {

 private product$: Observable<IProduct>;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private productService: ProductService) { }

  ngOnInit(): void {

    this.product$ = this.route.paramMap.pipe(
      switchMap((params: ParamMap) =>
          // tslint:disable-next-line: radix
          this.productService.getProductById(Number.parseInt(params.get('id')))
        ));
    }

    editProduct(product: IProduct): void {

      // tslint:disable-next-line: no-shadowed-variable
      this.product$.subscribe(product => {
        console.log('edit clicked');
        this.router.navigate(['products/edit/' + product.id]);
      });
  }
}
