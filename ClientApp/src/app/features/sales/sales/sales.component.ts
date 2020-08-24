import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { SalesListRow } from 'src/app/data/sales/sales-list-row.model';
import { SalesService } from './../../../data/sales/sales.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-sales',
  templateUrl: './sales.component.html',
  styleUrls: ['./sales.component.scss'],
})
export class SalesComponent implements OnInit {
  tableData$: Observable<SalesListRow[]>;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private salesService: SalesService
  ) {}

  ngOnInit(): void {
    this.tableData$ = this.salesService.getSalesList();
  }

  onNewClick(): void {
    this.router.navigate(['new'], { relativeTo: this.route });
  }
}
