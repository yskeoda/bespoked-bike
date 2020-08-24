import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MaterialUiModule } from './../../shared/material-ui.module';
import { ProductTableComponent } from './product-table/product-table.component';
import { ProductsRoutingModule } from './products-routing.module';
import { ProductsComponent } from './products/products.component';
import { ProductEditComponent } from './product-edit/product-edit.component';

@NgModule({
  declarations: [ProductsComponent, ProductTableComponent, ProductEditComponent],
  imports: [CommonModule, ProductsRoutingModule, MaterialUiModule],
})
export class ProductsModule {}
