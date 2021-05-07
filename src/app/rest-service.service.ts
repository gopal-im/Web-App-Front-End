import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class RestServiceService {
public userDtls:{};
  constructor(private http: HttpClient) { }
  login( Object): Observable<any> {

    const headers = new HttpHeaders({ 
        'Content-Type': 'application/json'
     });
    return this.http.post(environment.baseURL + '/user/userLogin', Object,{headers});
}
custInfoSave(Object): Observable<any> {

  const headers = new HttpHeaders({ 
      'Content-Type': 'application/json'
   });
  return this.http.post(environment.baseURL + '/custinfo/savecustinfo', Object,{headers});
}
getCustData(): Observable<any> {

  const headers = new HttpHeaders({ 
      'Content-Type': 'application/json'
   });
  return this.http.get(environment.baseURL + '/custinfo/getCustData',{headers});
}
}
