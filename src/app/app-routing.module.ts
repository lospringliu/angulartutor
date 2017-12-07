import { NgModule, ModuleWithProviders } from '@angular/core';
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
import { NgbProgressbarLabeledComponent } from './ng-bootstrap/ngb-progressbar-labeled.component';

import { DefaultComponent } from './default';
import {GettingStarted} from './getting-started';
import {
  NgbdAccordion,
  NgbdAlert,
  NgbdButtons,
  NgbdCarousel,
  NgbdCollapse,
  NgbdDatepicker,
  NgbdDropdown,
  NgbdModal,
  NgbdPagination,
  NgbdPopover,
  NgbdProgressbar,
  NgbdRating,
  NgbdTabs,
  NgbdTimepicker,
  NgbdTooltip,
  NgbdTypeahead
} from './components';
import {DEFAULT_TAB} from './shared/component-wrapper/component-wrapper.component';

const DEFAULT_API_PATH = {path: '', pathMatch: 'full', redirectTo: DEFAULT_TAB};

const componentRoutes = [{
  path: 'components/accordion',
  children: [
    DEFAULT_API_PATH,
    {path: ':tab', component: NgbdAccordion}
  ]
}, {
  path: 'components/alert',
  children: [
    DEFAULT_API_PATH,
    {path: ':tab', component: NgbdAlert}
  ]
}, {
  path: 'components/buttons',
  children: [
    DEFAULT_API_PATH,
    {path: ':tab', component: NgbdButtons}
  ]
}, {
  path: 'components/carousel',
  children: [
    DEFAULT_API_PATH,
    {path: ':tab', component: NgbdCarousel}
  ]
}, {
  path: 'components/collapse',
  children: [
    DEFAULT_API_PATH,
    {path: ':tab', component: NgbdCollapse}
  ]
}, {
  path: 'components/datepicker',
  children: [
    DEFAULT_API_PATH,
    {path: ':tab', component: NgbdDatepicker}
  ]
}, {
  path: 'components/dropdown',
  children: [
    DEFAULT_API_PATH,
    {path: ':tab', component: NgbdDropdown}
  ]
}, {
  path: 'components/modal',
  children: [
    DEFAULT_API_PATH,
    {path: ':tab', component: NgbdModal}
  ]
}, {
  path: 'components/pagination',
  children: [
    DEFAULT_API_PATH,
    {path: ':tab', component: NgbdPagination}
  ]
}, {
  path: 'components/popover',
  children: [
    DEFAULT_API_PATH,
    {path: ':tab', component: NgbdPopover}
  ]
}, {
  path: 'components/progressbar',
  children: [
    DEFAULT_API_PATH,
    {path: ':tab', component: NgbdProgressbar}
  ]
}, {
  path: 'components/rating',
  children: [
    DEFAULT_API_PATH,
    {path: ':tab', component: NgbdRating}
  ]
}, {
  path: 'components/tabs',
  children: [
    DEFAULT_API_PATH,
    {path: ':tab', component: NgbdTabs}
  ]
}, {
  path: 'components/timepicker',
  children: [
    DEFAULT_API_PATH,
    {path: ':tab', component: NgbdTimepicker}
  ]
}, {
  path: 'components/tooltip',
  children: [
    DEFAULT_API_PATH,
    {path: ':tab', component: NgbdTooltip}
  ]
}, {
  path: 'components/typeahead',
  children: [
    DEFAULT_API_PATH,
    {path: ':tab', component: NgbdTypeahead}
  ]
}
];

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
  { path: 'ngb-progressbar-labeled', component: NgbProgressbarLabeledComponent },
  {path: 'home', component: DefaultComponent},
  {path: 'getting-started', component: GettingStarted},
  {path: 'components', pathMatch: 'full', redirectTo: 'components/accordion' },
  ...componentRoutes
]

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
