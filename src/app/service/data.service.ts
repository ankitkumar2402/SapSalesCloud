import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class DataService {
  Url: string = '/src/app/service/dataBunch.json';

  constructor(private http : HttpClient) { }

  getWorkCenterNames(): Observable<any>{
    return this.http.get(this.Url);
  }

 getData(): Observable<any>{

    const headers= new HttpHeaders()
    .set('content-type', 'application/json')
    .set('Access-Control-Allow-Origin', '*')
   //.set('x-sap-crm-token', 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJqaW0ua2lya0BzYWxlc2Nsb3VkLmNvbSIsImVpZCI6IiIsImxvZyI6MywiaXNzIjoiY29tLnNhcC5jcm0uaWFtIiwibGFuZ3VhZ2UiOiJlbiIsInR5cCI6IjEiLCJub24iOiJ0LUZtTTBFY0hDNldlbldZYm1zRmpsMlBreWMiLCJsb2NhbGUiOiJlbi1VUyIsInNwaWQiOiJlZDcyYWUxMi1lYzc3LTExZTktYTYzOS02YmMyMjZkMjg3M2EiLCJhdWQiOiJuc2QxLWRldi5jeG0tc2FsZXNjbG91ZC5jb20iLCJ1aWQiOiJlZDcyYWUxMi1lYzc3LTExZTktYTYzOS02YmMyMjZkMjg3M2EiLCJjNGMiOmZhbHNlLCJ6aWQiOiI1ZGExMDQ4N2JjYjBhOTc2ODQzYTA4ZDAiLCJydHYiOjg2NDAwLCJleHAiOjE2MjMyNDE3NTYsImFpZCI6Im5zZDEifQ.G00OjL1oblIXlBJwWMuCB4MJWAMTko9ILJA4l75BMP4')
    .set("Authorization", "Basic " + btoa("jim.kirk@salescloud.com:North$tar1"))

    //return this.http.post('https://putsreq.com/O1b32vbT38qlpX0Fry1d', userSettings);

    return this.http.get('https://nsd1-dev.cxm-salescloud.com/flagfavtag/all', {'headers': headers});
  }

}
