import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
 baseUrl:string = "http://localhost:5000/";
//  baseUrl:string="https://api.skybate.in/";
  constructor(private http:HttpClient) { }


  paymentForFlutter(body:any){
    return this.http.post(this.baseUrl+'pay/flutter',body,{});
  } 

}
