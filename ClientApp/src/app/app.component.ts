import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'app';

  constructor(private httpClient: HttpClient) {}

  getTestData(): void {
    // TODO Delete test to verify that I can interact with server side code.
    this.httpClient.get('Product').subscribe((v) => console.log(v));
  }
}
