import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductEntryComponent } from './productentry/product-entry.component';
import { UserModule } from './user/user.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SellersModule } from './sellers/sellers.module';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { OpencloseComponent } from './openclose/openclose.component';
import { ProductlistComponent } from './productlist/productlist.component';
import { HttpClientModule } from '@angular/common/http';
import { ViewComponent } from './view/view.component';


@NgModule({
  declarations: [
    AppComponent,
    ProductEntryComponent,
    OpencloseComponent,
    ProductlistComponent,
    ViewComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    UserModule,
    FormsModule,
    SellersModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    HttpClientModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
