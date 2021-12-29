import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FormControl,FormGroup } from '@angular/forms';
import { Observable, of } from 'rxjs';
import { Fund } from "../app/fund.model";

@Injectable({
  providedIn: 'root'
})
export class FundService {
api = `http://localhost:8082/api/funds/`
  constructor(private httpClient:HttpClient) { 

  }
  editFund(id:number,newFund:Fund):Observable<Fund>{
    return this.httpClient.put<Fund>(this.api + id ,newFund)
  }
  getAllFunds():Observable<Fund[]>{
    return this.httpClient.get<Fund[]>(this.api)
  }
  deleteFund(id:number):Observable<Fund[]>{
    return this.httpClient.delete<Fund[]>(this.api + id)
  }
  addFund(newFund:Fund):Observable<Fund>{
    return this.httpClient.post<Fund>(this.api,newFund)
  }
  getFund(id:number):Observable<Fund>{
    return this.httpClient.get<Fund>(this.api + id)
  }
  mapObjectToForm(obj:any,form:FormGroup){
    for (const [key, value] of Object.entries(obj)) {
      form.patchValue({[key]:value});
  
  }
return form
}
  createNewFundForm() {
    
    let newFund = new FormGroup({
      name: new FormControl(""),
      asset_class: new FormControl(""),
      change_price: new FormControl(0),
      expense_ratio: new FormControl(0),
      investment_min: new FormControl(0),
      price: new FormControl(0),
      risk_level: new FormControl(0),
      ticker: new FormControl(""),
      id:new FormControl(0)
    })
    let Fund = {
      name: "",
      asset_class: "",
      change_price: 0,
      expense_ratio: 0,
      investment_min: 0,
      price: 0,
      risk_level: 0,
      ticker: "",
      id:0
  }
  return this.mapObjectToForm(Fund,newFund)
  }
 
  
  
}
