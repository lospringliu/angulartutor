import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StatusListComponent } from './status-list/status-list.component';
import { OsCategoryListComponent } from './os-category-list/os-category-list.component';
import { StatusDetailComponent } from './status-detail/status-detail.component';
import { OsCategoryDetailComponent } from './os-category-detail/os-category-detail.component'; 

const routes: Routes = [
  { path: 'status-list', component: StatusListComponent },
  { path: 'oscategory-list', component: OsCategoryListComponent },
  { path: 'status-detail/:id', component: StatusDetailComponent },
  { path: 'oscategory-detail/:id', component: OsCategoryDetailComponent }
]

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
