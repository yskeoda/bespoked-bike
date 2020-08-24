import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MaterialUiModule } from './../../shared/material-ui.module';
import { ProductsRoutingModule } from './products-routing.module';
import { ProductsComponent } from './products/products.component';

@NgModule({
  declarations: [ProductsComponent],
  imports: [CommonModule, ProductsRoutingModule, MaterialUiModule],
})
export class ProductsModule {}
