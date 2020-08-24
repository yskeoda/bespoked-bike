import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnInit,
  Output,
  EventEmitter,
} from '@angular/core';
import { Product } from './../../../data/product/product.model';

@Component({
  selector: 'app-product-table',
  templateUrl: './product-table.component.html',
  styleUrls: ['./product-table.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProductTableComponent implements OnInit {
  @Input() data: Product[] = new Array<Product>();
  @Output() rowClick = new EventEmitter<number>();

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

  onRowClick(productId: number): void {
    this.rowClick.emit(productId);
  }
}
