import { ProductService } from './../../../data/product/product.service';
import { map, switchMap } from 'rxjs/operators';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from 'src/app/data/product/product.model';
import { Observable } from 'rxjs';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.scss'],
})
export class ProductEditComponent implements OnInit {
  form: FormGroup;
  productId: number;
  product$: Observable<Product>;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private formBuilder: FormBuilder,
    private productService: ProductService
  ) {
    this.form = this.formBuilder.group({
      productName: ['', Validators.required],
      manufacturer: ['', Validators.required],
      style: [''],
      purchasePrice: ['', Validators.required],
      salePrice: ['', Validators.required],
      qtyOnHand: ['', Validators.required],
      commissionPercentage: ['', Validators.required],
    });
  }

  ngOnInit(): void {
    this.product$ = this.route.queryParams.pipe(
      map((params) => params.productId),
      switchMap((id) => {
        this.productId = id;
        return this.productService.getById(id);
      })
    );

    this.product$.subscribe((product) => this.form.patchValue(product));
  }

  onSubmit(): void {
    if (this.form.valid) {
      console.log('on submit', this.form.value);
    }
  }
}
