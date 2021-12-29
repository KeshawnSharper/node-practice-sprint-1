import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormControl,FormGroup } from '@angular/forms';
import { FundService } from '../fund.service';
import { Fund } from '../fund.model';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  Funds: Fund[]= []
  // I use a form group to easily bind the data
  newFund = <FormGroup>this.FundService.createNewFundForm()
  constructor(private http:HttpClient,private FundService: FundService) { }
  ngOnInit(): void {
    // We call ngonit in the home component and call a function that gets the current funds
    this.getCurrentFunds()
  }
  //I call this function that will call the service function to get the current funds from the back end 
  //and subscribe the data to the component
  getCurrentFunds = () => {
    this.FundService.getAllFunds().subscribe((data) => {
      console.log(data)
      this.Funds = data
    })
  }
  // This takes an item by Id and sends that id to the service to delete it from the back end
  onDelete = (id:any) =>{
    console.log(id)
    this.FundService.deleteFund(Number(id)).subscribe((data) => {
      // We call the current funds to get the accurate data from the back end 
      this.getCurrentFunds()
    })
  }
// We send new fund form control to the addFund service 
  onCreate = () => {
    console.log(this.newFund.value)
    this.FundService.addFund(this.newFund.value).subscribe(data => {
    // We call the current funds to get the accurate data from the back end 
      this.getCurrentFunds()
  })
    
  }
}
