import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Headers} from '@angular/http';
import {HeaderService}  from "./header.service"
@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http : HttpClient,private _HeaderService : HeaderService) { }
  login(body){
    console.log(body)
    // const header =this._HeaderService.config_Header(body);
    const headers = new HttpHeaders().set("X-CustomHttpHeader", "CUSTOM_VALUE");
    return   this.http.post('/routes/login/',body,{headers}).pipe(map(getData => {
      return getData;  
    }))
  }
}
