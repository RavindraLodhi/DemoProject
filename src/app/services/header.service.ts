import { Injectable } from '@angular/core';
import { Http, Response, Headers,RequestOptions,HttpModule} from '@angular/http';

@Injectable({
  providedIn: 'root'
})
export class HeaderService {

  constructor() { }
  config_Header(body) {
    const basicToken = 'basic ' + btoa(body.username + ':' + body.password);
    let headers = new Headers();
    headers.append('Content-Type', 'application/json; charset=utf-8');
    headers.append('accept', 'application/json');
    headers.append('access-control-allow-origin', '*');
    headers.append('Authorization', basicToken);
    let options = new RequestOptions({ headers: headers });
    return options;
  }
}
