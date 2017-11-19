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

// import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
// import { InMemoryDataService } from './in-memory-data.service';
import { StatusSearchComponent } from './status-search/status-search.component';

@NgModule({
  declarations: [
    AppComponent,
    StatusListComponent,
    OsCategoryListComponent,
    StatusDetailComponent,
    OsCategoryDetailComponent,
    MessageComponent,
    StatusSearchComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    // HttpClientInMemoryWebApiModule.forRoot(InMemoryDataService, { dataEncapsulation: false })
  ],
  providers: [StatusService, MessageService, OsCategoryService],
  bootstrap: [AppComponent]
})
export class AppModule { }
