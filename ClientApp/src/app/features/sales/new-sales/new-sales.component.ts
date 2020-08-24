import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-new-sales',
  templateUrl: './new-sales.component.html',
  styleUrls: ['./new-sales.component.scss'],
})
export class NewSalesComponent implements OnInit {
  form: FormGroup;

  constructor(private formBuilder: FormBuilder, private snackBar: MatSnackBar) {
    this.form = this.formBuilder.group({
      productId: ['', Validators.required],
      salesPersonId: ['', Validators.required],
      customerId: ['', Validators.required],
      salesDate: ['', Validators.required],
      priceSold: ['', Validators.required],
      commissionAmount: ['', Validators.required],
    });
  }

  ngOnInit(): void {
    // TODO need to configure data source for product, sales, customer selection
  }
}
