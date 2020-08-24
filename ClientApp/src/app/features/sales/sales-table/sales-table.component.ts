import { SalesListRow } from './../../../data/sales/sales-list-row.model';
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
  @Input() data: SalesListRow[] = new Array<SalesListRow>();

  displayedColumns = [
    'productName',
    'customerName',
    'salesDate',
    'price',
    'salesPersonName',
    'commission',
  ];

  ngOnInit(): void {}
}
