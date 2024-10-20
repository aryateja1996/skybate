import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
 baseUrl:string = "http://localhost:3010/";
//  baseUrl:string="https://api.skybate.in/";
  constructor(private http:HttpClient) { }


  paymentForFlutter(body:any){
    return this.http.post(this.baseUrl+'pay/flutter',body,{});
  } 
  saveDetails(body:any , fort:string){
    return this.http.post(this.baseUrl+'saveDetails/'+ fort,body,{});
  }
  payment(body:any,fort:string){
    return this.http.post(this.baseUrl+'pay/'+fort,body,{});
  } 

}
