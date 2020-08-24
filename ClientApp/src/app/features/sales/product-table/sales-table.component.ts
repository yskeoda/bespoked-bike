import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnInit,
  Output,
  EventEmitter,
} from '@angular/core';
import { Product } from '../../../data/product/product.model';

@Component({
  selector: 'app-sales-table',
  templateUrl: './sales-table.component.html',
  styleUrls: ['./sales-table.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SalesTableComponent implements OnInit {
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
