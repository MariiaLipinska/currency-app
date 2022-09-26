import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header-component/header.component';
import { InputComponent } from './components/input-component/input.component';
import { CurrencyapidataService } from './currencyapidata.service';

@NgModule({
  declarations: [
    AppComponent,
    InputComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [CurrencyapidataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
