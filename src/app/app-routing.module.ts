import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AgGridPageComponent } from './ag-grid-page/ag-grid-page.component';
import { AntdGridPageComponent } from './antd-grid-page/antd-grid-page.component';

const routes: Routes = [
  { path:'antd-grid', component:AntdGridPageComponent},
  { path:'ag-grid', component:AgGridPageComponent},
  { path:'', redirectTo:'/antd-grid', pathMatch:'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
