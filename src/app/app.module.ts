import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { StatusComponent } from './status/status.component';
import { OsCategoryComponent } from './os-category/os-category.component';
import { StatusDetailComponent } from './status-detail/status-detail.component';


@NgModule({
  declarations: [
    AppComponent,
    StatusComponent,
    OsCategoryComponent,
    StatusDetailComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
