import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TestGridComponent } from './test-grid/test-grid.component';
import { Testgrid2Component } from './testgrid2/testgrid2.component';

const routes: Routes = [
  { path: 'grid', component: TestGridComponent },
  { path: 'grid2', component: Testgrid2Component },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
