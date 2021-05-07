import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { RestServiceService } from '../rest-service.service';

@Component({
  selector: 'app-bank-form',
  templateUrl: './bank-form.component.html',
  styleUrls: ['./bank-form.component.css']
})
export class BankFormComponent implements OnInit {
  CustForm: FormGroup;
  submitted:boolean = false;
  constructor(private formBuilder: FormBuilder,
    public restsrvc:RestServiceService,
    private router: Router,
    private route: ActivatedRoute, ) { }

  ngOnInit() {
    this.CustForm = this.formBuilder.group({
      enquiryid: ['', Validators.required],
      customername: ['', Validators.required],
      jobtype: ['', Validators.required],
      loanamount: ['', Validators.required],
      interestrate: ['', Validators.required],
      createdby:[this.restsrvc.userDtls['username']],
      approvedby:[null],
      recomendedby:[null],
      status:["Pending"],

  });
  }
  savecustinfo(){
    if(+this.CustForm.get("interestrate").value>16){
      this.CustForm.get('status').setValue('Approved');
      this.CustForm.get('approvedby').setValue(this.restsrvc.userDtls['username']);
    }
    this.restsrvc.custInfoSave(this.CustForm.value).subscribe((data:any)=>{
 if(data!=null){
 alert('saved successfully');
 }else{
   alert('failed to save');
 }
    })
   }

   viewCustData(){
    this.router.navigate(['/viewcustDtls'], { relativeTo: this.route });
   }
}
