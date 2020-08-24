import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  constructor(private httpClient: HttpClient) {}

  getTestData(): void {
    this.httpClient.get('WeatherForecast').subscribe((v) => console.log(v));
  }
}
