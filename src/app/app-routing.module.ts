import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StatusListComponent } from './status-list/status-list.component';
import { OsListComponent } from './os-list/os-list.component';
import { OsCategoryListComponent } from './os-category-list/os-category-list.component';
import { StatusDetailComponent } from './status-detail/status-detail.component';
import { OsCategoryDetailComponent } from './os-category-detail/os-category-detail.component'; 
import { OsDetailComponent } from './os-detail/os-detail.component'; 
import { WorkitemListComponent } from './workitem-list/workitem-list.component';
import { WorkitemDetailComponent } from './workitem-detail/workitem-detail.component';
import { TaskListComponent } from './task-list/task-list.component';
import { TaskDetailComponent } from './task-detail/task-detail.component';

const routes: Routes = [
  { path: 'status-list', component: StatusListComponent },
  { path: 'oscategory-list', component: OsCategoryListComponent },
  { path: 'os-list', component: OsListComponent },
  { path: 'status-detail/:id', component: StatusDetailComponent },
  { path: 'os-detail/:id', component: OsDetailComponent },
  { path: 'oscategory-detail/:id', component: OsCategoryDetailComponent },
  { path: 'workitem-list', component: WorkitemListComponent },
  { path: 'workitem-detail/:id', component: WorkitemDetailComponent },
  { path: 'task-list', component: TaskListComponent },
  { path: 'task-detail/:id', component: TaskDetailComponent },
]

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
