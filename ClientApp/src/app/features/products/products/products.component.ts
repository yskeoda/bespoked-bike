import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, NavigationExtras } from '@angular/router';
import { ProductService } from '../../../data/product/product.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
})
export class ProductsComponent implements OnInit {
  tableData$ = this.productService.getAll();

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private productService: ProductService
  ) {}

  ngOnInit(): void {}

  onRowClick(productId: number): void {
    const navExtras: NavigationExtras = {
      relativeTo: this.route,
      queryParams: { productId },
    };

    this.router.navigate(['edit'], navExtras);
  }
}
