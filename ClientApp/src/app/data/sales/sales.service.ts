import { Observable } from 'rxjs';
import { SalesListRow } from './sales-list-row.model';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class SalesService {
  private path = 'api/Sales';

  constructor(private httpClient: HttpClient) {}

  getSalesList(beginDate: Date, endDate: Date): Observable<SalesListRow[]> {
    let params = new HttpParams();
    params = params.append('beginDate', beginDate.toISOString());
    params = params.append('endDate', endDate.toISOString());

    return this.httpClient.get<SalesListRow[]>(`${this.path}`, {
      params,
    });
  }
}
