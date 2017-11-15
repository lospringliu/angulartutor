import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StatusComponent } from './status/status.component';
import { OsCategoryComponent } from './os-category/os-category.component';
import { StatusDetailComponent } from './status-detail/status-detail.component';
import { OsCategoryDetailComponent } from './os-category-detail/os-category-detail.component'; 

const routes: Routes = [
  { path: 'status', component: StatusComponent },
  { path: 'oscategory', component: OsCategoryComponent },
  { path: 'status-detail/:id', component: StatusDetailComponent },
  { path: 'oscategory-detail/:id', component: OsCategoryDetailComponent }
]

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
