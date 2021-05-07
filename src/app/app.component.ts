import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from './api.service';
import { RestServiceService } from './rest-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'TestApp';
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    public apiService:ApiService,
    public restsrvc:RestServiceService){

    }
  openhome(){
    this.router.navigate(['/home'], { relativeTo: this.route });
    this.apiService.openModal();
  }
  userlogout(){
    this.restsrvc.userDtls=null;
    this.router.navigate(['/'], { relativeTo: this.route });

  }
}
