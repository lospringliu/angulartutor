import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { StatusListComponent } from './status-list/status-list.component';
import { OsCategoryListComponent } from './os-category-list/os-category-list.component';
import { StatusDetailComponent } from './status-detail/status-detail.component';
import { OsCategoryDetailComponent } from './os-category-detail/os-category-detail.component';
import { StatusService } from './status.service';
import { MessageService } from './message.service';
import { MessageComponent } from './message/message.component';
import { OsCategoryService } from './os-category.service';
import { AppRoutingModule } from './app-routing.module';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
//import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

// import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
// import { InMemoryDataService } from './in-memory-data.service';
import { StatusSearchComponent } from './status-search/status-search.component';
import { ProductBuildService } from './product-build.service';
import { OsService } from './os.service';
import { OsListComponent } from './os-list/os-list.component';
import { OsDetailComponent } from './os-detail/os-detail.component';
import { WorkitemService } from './workitem.service';
import { WorkitemListComponent } from './workitem-list/workitem-list.component';
import { WorkitemDetailComponent } from './workitem-detail/workitem-detail.component';
import { VersionService } from './version.service';
import { ProductService } from './product.service';
import { PatchStatusService } from './patch-status.service';
//import { NgbProgressbarLabeledComponent } from './ng-bootstrap/ngb-progressbar-labeled.component';

@NgModule({
  declarations: [
    AppComponent,
    StatusListComponent,
    OsCategoryListComponent,
    StatusDetailComponent,
    OsCategoryDetailComponent,
    MessageComponent,
    StatusSearchComponent,
    OsListComponent,
    OsDetailComponent,
    WorkitemListComponent,
    WorkitemDetailComponent
    //NgbProgressbarLabeledComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    //NgbModule.forRoot(),
    HttpClientModule,
    AppRoutingModule,
    // HttpClientInMemoryWebApiModule.forRoot(InMemoryDataService, { dataEncapsulation: false })
  ],
  providers: [StatusService, MessageService, OsCategoryService, ProductBuildService, OsService, WorkitemService, VersionService, ProductService, PatchStatusService],
  bootstrap: [AppComponent]
})
export class AppModule { }
