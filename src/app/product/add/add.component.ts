import { ProductService } from './../services/product.service';
import { LookupService } from './../services/lookup.service';
import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { Lookup } from '../models/lookup';
import { Product } from '../models/product';
import { Router, ParamMap, ActivatedRoute } from '@angular/router';
import { isNullOrUndefined } from 'util';
import { switchMap } from 'rxjs/operators';


@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {

  productForm = this.fb.group({});
  units: Observable<Lookup[]>;
  categories: Observable<Lookup[]>;

  formSubmitted = false;

  constructor(private fb: FormBuilder, private lookupservice: LookupService,
              private productservice: ProductService,
              private router: Router,
              private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.productForm.addControl('id', new FormControl(''));
    this.productForm.addControl('name', new FormControl('', [Validators.required]));
    this.productForm.addControl('code', new FormControl('', [Validators.required]));
    this.productForm.addControl('unit', new FormControl('', [Validators.required]));
    this.productForm.addControl('category', new FormControl('', [Validators.required]));
    this.productForm.addControl('salesRate', new FormControl('', [Validators.required]));
    this.productForm.addControl('purchaseRate', new FormControl('', [Validators.required]));
    this.units = this.lookupservice.getUnits();
    this.categories = this.lookupservice.getProductCategories();

    const product$ = this.activatedRoute.paramMap.pipe(
      switchMap((params: ParamMap) =>
      // tslint:disable-next-line: radix
      this.productservice.getProductById(Number.parseInt(params.get('id')))
    ));

    product$.subscribe(product => {
      // tslint:disable-next-line: deprecation
      if (!isNullOrUndefined(product)) {
        console.log(product);
        this.productForm.addControl('id', new FormControl(''));
        this.productForm.addControl('name', new FormControl('', [Validators.required]));
        this.productForm.addControl('code', new FormControl('', [Validators.required]));
        this.productForm.addControl('unit', new FormControl('', [Validators.required]));
        this.productForm.addControl('category', new FormControl('', [Validators.required]));
        this.productForm.addControl('salesRate', new FormControl('', [Validators.required]));
        this.productForm.addControl('purchaseRate', new FormControl('', [Validators.required]));
    }
  });

  }

    save($event): void {

    this.formSubmitted = true;
    // tslint:disable-next-line: align
    if (!this.productForm.valid) {
      return;
    }
    this.saveProduct();
    this.router.navigate(['/products']);

  }

  saveAndContinue($event): void {

    this.formSubmitted = true;

    if (!this.productForm.valid) {
      return;
    }
    this.saveProduct();
    // this.router.navigate(['/products'])

  }

  private saveProduct() {
    const product = new Product();

    product.id = this.productForm.get('id').value;
    product.name = this.productForm.get('name').value;
    product.code = this.productForm.get('code').value;

    product.category = this.getLookupObjFromCode(this.productForm.get('category').value);
    product.unit = this.getLookupObjFromCode(this.productForm.get('unit').value);


    product.purchaseRate = this.productForm.get('category').value;
    product.salesRate = this.productForm.get('salesRate').value;

    // tslint:disable-next-line: triple-equals
    if (product.id == 0) {
    this.productservice.addNewProduct(product); } else {
      this.productservice.updateProduct(product);
    }

  }

  getLookupObjFromCode(code: string): Lookup {
    let lookup: Lookup = null;
    const subscription = this.units.subscribe(lookups => {
      // tslint:disable-next-line: triple-equals
      lookup = lookups.find(item => item.code == code);
    });
    subscription.unsubscribe();
    return lookup;
  }

}
