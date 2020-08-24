import { NgModule } from '@angular/core';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';

@NgModule({
  imports: [MatTableModule, MatPaginatorModule, MatSortModule],
  exports: [MatTableModule, MatPaginatorModule, MatSortModule],
})
export class MaterialUiModule {}
