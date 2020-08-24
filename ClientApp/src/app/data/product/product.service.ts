import { Product } from './product.model';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  private path = 'api/Product';

  constructor(private httpClient: HttpClient) {}

  getAll(): Observable<Product[]> {
    return this.httpClient.get<Product[]>(this.path);
  }

  getById(id: number): Observable<Product> {
    return this.httpClient.get<Product>(`${this.path}/${id}`);
  }

  put(product: Product): Observable<any> {
    return this.httpClient.put(
      `${this.path}/${product.productId}`,
      JSON.stringify(product),
      {
        headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
      }
    );
  }

  post(product: Product): Observable<any> {
    return this.httpClient.post(`${this.path}`, JSON.stringify(product), {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
    });
  }
}
