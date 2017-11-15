import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { StatusComponent } from './status/status.component';
import { OsCategoryComponent } from './os-category/os-category.component';
import { StatusDetailComponent } from './status-detail/status-detail.component';
import { OsCategoryDetailComponent } from './os-category-detail/os-category-detail.component';
import { StatusService } from './status.service';
import { MessageService } from './message.service';
import { MessageComponent } from './message/message.component';
import { OsCategoryService } from './os-category.service';


@NgModule({
  declarations: [
    AppComponent,
    StatusComponent,
    OsCategoryComponent,
    StatusDetailComponent,
    OsCategoryDetailComponent,
    MessageComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [StatusService, MessageService, OsCategoryService],
  bootstrap: [AppComponent]
})
export class AppModule { }
