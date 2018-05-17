import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { TableComponent } from './table/table.component';
import * as _ from "lodash"


@NgModule({
  declarations: [
    AppComponent,
    TableComponent
  ],
  imports: [
		BrowserModule
		
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
