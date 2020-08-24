import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { filter, map, shareReplay, switchMap } from 'rxjs/operators';
import { Product } from './../../../data/product/product.model';
import { ProductService } from './../../../data/product/product.service';

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
    private productService: ProductService,
    private snackBar: MatSnackBar
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
      map((params) => Number(params.productId)),
      filter((id) => id > 0),
      switchMap((id) => {
        this.productId = id;
        return this.productService.getById(id);
      }),
      shareReplay(1)
    );

    this.product$.subscribe((product) => this.form.patchValue(product));
  }

  onSubmit(): void {
    if (this.form.valid) {
      console.log('on submit', this.form.value);
      const product: Product = this.form.value;
      product.productId = this.productId;
      this.productService
        .put(product)
        .subscribe((v) => this.snackBar.open('Saved'));
    }
  }
}
