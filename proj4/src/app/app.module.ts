import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReactiveComponent } from './reactive/reactive.component';
import { ProductinfoComponent } from './productinfo/productinfo.component';
import { ProductServices } from './productinfo/model/productservice';
import { DisplayproductComponent } from './displayproduct/displayproduct.component';

@NgModule({
  declarations: [
    AppComponent,
    ReactiveComponent,
    ProductinfoComponent,
    DisplayproductComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [ProductServices],
  bootstrap: [AppComponent]
})
export class AppModule { }
