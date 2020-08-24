import {
  AfterViewInit,
  Component,
  Input,
  OnInit,
  ViewChild,
  ChangeDetectionStrategy,
} from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTable } from '@angular/material/table';
import { Product } from './../../../data/product/product.model';
import {
  ProductTableDataSource,
  ProductTableItem,
} from './product-table-datasource';

@Component({
  selector: 'app-product-table',
  templateUrl: './product-table.component.html',
  styleUrls: ['./product-table.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProductTableComponent implements OnInit {
  @Input() data: Product[] = new Array<Product>();

  displayedColumns = [
    'productName',
    'manufacturer',
    'style',
    'purchasePrice',
    'salePrice',
    'qtyOnHand',
    'commissionPercentage',
  ];

  ngOnInit(): void {}
}
