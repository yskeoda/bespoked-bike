import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MaterialUiModule } from './../../shared/material-ui.module';
import { SalesRoutingModule } from './sales-routing.module';
import { SalesTableComponent } from './sales-table/sales-table.component';
import { SalesComponent } from './sales/sales.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [SalesComponent, SalesTableComponent],
  imports: [
    CommonModule,
    SalesRoutingModule,
    MaterialUiModule,
    FormsModule,
    ReactiveFormsModule,
  ],
})
export class SalesModule {}
