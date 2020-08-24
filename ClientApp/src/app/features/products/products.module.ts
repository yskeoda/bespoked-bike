import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MaterialUiModule } from './../../shared/material-ui.module';
import { ProductTableComponent } from './product-table/product-table.component';
import { ProductsRoutingModule } from './products-routing.module';
import { ProductsComponent } from './products/products.component';

@NgModule({
  declarations: [ProductsComponent, ProductTableComponent],
  imports: [CommonModule, ProductsRoutingModule, MaterialUiModule],
})
export class ProductsModule {}
