import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ApiService } from './api.service';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BankFormComponent } from './bank-form/bank-form.component';
import { CustDataComponent } from './cust-data/cust-data.component';
import { CustomerModalComponent } from './customer-modal/customer-modal.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    BankFormComponent,
    CustDataComponent,
    CustomerModalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [ApiService],
  bootstrap: [AppComponent],
  entryComponents: [CustomerModalComponent]
})
export class AppModule { }
