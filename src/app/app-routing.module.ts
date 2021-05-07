import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BankFormComponent } from './bank-form/bank-form.component';
import { CustDataComponent } from './cust-data/cust-data.component';
import { CustomerModalComponent } from './customer-modal/customer-modal.component';
import { HomeComponent } from './home/home.component';


const routes: Routes = [
  {
    path:'',component:HomeComponent,
    
  },
  {
    path:'login',component:HomeComponent,
    
  }, {
    path:'custDtls',component:BankFormComponent,
    
  },
  {
    path:'viewcustDtls',component:CustDataComponent,
    
  },{
    path:'Viewstaus',component:CustomerModalComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
