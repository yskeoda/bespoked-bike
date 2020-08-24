import { ProductService } from '../../../data/product/product.service';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
})
export class ProductsComponent implements OnInit {
  tableData$ = this.productService.getData();

  constructor(private productService: ProductService) {}

  ngOnInit(): void {}
}
