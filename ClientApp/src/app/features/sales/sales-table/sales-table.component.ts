import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnInit,
} from '@angular/core';
import { SalesListRow } from './../../../data/sales/sales-list-row.model';

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
