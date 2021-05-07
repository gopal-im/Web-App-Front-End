import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { RestServiceService } from '../rest-service.service';

@Component({
  selector: 'app-customer-modal',
  templateUrl: './customer-modal.component.html',
  styleUrls: ['./customer-modal.component.css']
})
export class CustomerModalComponent implements OnInit {
customerdata:any;
//@Input() customerdata: any = {};
  CustForm: FormGroup;
  submitted:boolean = false;
  constructor(private formBuilder: FormBuilder,
    public restsrvc:RestServiceService,
    private router: Router,
    private route: ActivatedRoute, ) { }

  ngOnInit() {
    this.customerdata=JSON.parse(sessionStorage.getItem("viewCustdata"));
    this.CustForm = this.formBuilder.group({
      enquiryid: ['', Validators.required],
      customername: ['', Validators.required],
      jobtype: ['', Validators.required],
      loanamount: ['', Validators.required],
      interestrate: ['', Validators.required],
      createdby:[''],
      status:['']
      

  });
   this.CustForm.patchValue({
    enquiryid: this.customerdata.enquiryid,
    customername: this.customerdata.customername,
    jobtype: this.customerdata.jobtype,
    loanamount: this.customerdata.loanamount,
    interestrate: this.customerdata.interestrate,
    createdby: this.customerdata.createdby,
    status: this.customerdata.status 
        });
  }
  ngOnDestroy(){
    sessionStorage.removeItem("viewCustdata");
  }

}
