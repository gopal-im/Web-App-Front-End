import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { RestServiceService } from '../rest-service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  loginForm: FormGroup;
  submitted:boolean = false;
  constructor( private formBuilder: FormBuilder,
    public restsrvc:RestServiceService,
    private router: Router,
    private route: ActivatedRoute,  ) { }

  ngOnInit() {
    this.restsrvc.userDtls={};
    this.loginForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
  });
  }
  onLogin(){
   this.restsrvc.login(this.loginForm.value).subscribe((data:any)=>{
    if(data!=null){
      this.restsrvc.userDtls=data;
      if(this.restsrvc.userDtls['userrole']=='R1'){
     this.router.navigate(['/custDtls'], { relativeTo: this.route });
    }else{
      this.router.navigate(['/viewcustDtls'], { relativeTo: this.route });
    }
    }
    else{
      alert("Invalid Username and Password");
    }
   })
  }
}
