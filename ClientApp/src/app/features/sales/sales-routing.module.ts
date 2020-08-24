import { NewSalesComponent } from './new-sales/new-sales.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SalesComponent } from './sales/sales.component';

const routes: Routes = [
  {
    path: '',
    component: SalesComponent,
  },
  {
    path: 'new',
    component: NewSalesComponent,
  },
  { path: '**', component: SalesComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SalesRoutingModule {}
