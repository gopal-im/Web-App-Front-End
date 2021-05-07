import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RestServiceService } from '../rest-service.service';

@Component({
  selector: 'app-cust-data',
  templateUrl: './cust-data.component.html',
  styleUrls: ['./cust-data.component.css']
})
export class CustDataComponent implements OnInit {

  public custData : any;
recomendDisable:boolean;
approveDisable:boolean;
  constructor(public restsrvc: RestServiceService,
    private router: Router,
    private route: ActivatedRoute,
   ) { }

  ngOnInit() {
    this.recomendButton();
    this.approvalbutton();
    this.restsrvc.getCustData().subscribe((response: any) => {4
      if(response!=null && response.length>0){
        this.custData = response;
        this.custData.forEach((item:any)=>{
item['Rdisabled']=true;
item['Adisabled']=true;
if(this.restsrvc.userDtls['userrole']=='R1'){
  item['Rdisabled']=true;
item['Adisabled']=true;
}//R1
else if(this.restsrvc.userDtls['userrole']=='R2'){
if(item['interestrate']>13 &&item['interestrate']<17 && item['status']!='Approved'){
  item['Rdisabled']=true;
item['Adisabled']=false;
}else if(item['interestrate']>0 &&item['interestrate']<15 && item['status']==='Pending'){
  item['Rdisabled']=false;
  item['Adisabled']=true;
}

}//R2
else if(this.restsrvc.userDtls['userrole']=='R3'){
  if(item['interestrate']>11 &&item['interestrate']<15 && item['status']!='Approved'){
    item['Rdisabled']=true;
  item['Adisabled']=false;
  }
  else if(item['interestrate']>0 &&item['interestrate']<12 && item['status']==='Pending'){
    item['Rdisabled']=false;
    item['Adisabled']=true;
  }
}//R3
else if(this.restsrvc.userDtls['userrole']=='R4'){
  if(item['interestrate']>0 &&item['interestrate']<12 && item['status']!='Approved'){
    item['Rdisabled']=true;
  item['Adisabled']=false;
  }
}
if(item.status==='Approved')
item['Adisabled']=true;
if(item.status==='Recomended')
item['Rdisabled']=true;
        });
      }
    });
  }
viewCustDetails(data:any){
sessionStorage.setItem("viewCustdata",JSON.stringify(data));
this.router.navigate(['/Viewstaus'], { relativeTo: this.route });
}
loanApproved(data:any){
var custdata=data;
custdata['status']='Approved';
custdata['approvedby']=this.restsrvc.userDtls['username'];
delete custdata.Rdisabled;
delete custdata.Adisabled;
this.restsrvc.custInfoSave(custdata).subscribe((data:any)=>{
  if(data!=null){
    this.approvalbutton();
    this.recomendButton();
    this.ngOnInit();
  alert('Loan Approved successfully');
  }else{
    alert('Approval failed');
  }
     })
}
loanRecomended(data:any){
  var custdata=data;
  custdata['status']='Recomended';
  custdata['recomendedby']=this.restsrvc.userDtls['username'];
  delete custdata.Rdisabled;
delete custdata.Adisabled;
  this.restsrvc.custInfoSave(custdata).subscribe((data:any)=>{
    if(data!=null){
      this.approvalbutton();
      this.recomendButton();
      this.ngOnInit();
    alert('Loan Recomended successfully');
    }else{
      alert('Recomendation failed ');
    }
       })
  }
  recomendButton(){
if(this.restsrvc.userDtls['userrole']=='R1')
this.recomendDisable=true;


  }
  approvalbutton(){
    if(this.restsrvc.userDtls['userrole']=='R1')
    this.approveDisable=true;
  }
}
