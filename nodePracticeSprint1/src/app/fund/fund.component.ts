import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Fund } from '../fund.model';
import { FundService } from '../fund.service';
ActivatedRoute
@Component({
  selector: 'app-fund',
  templateUrl: './fund.component.html',
  styleUrls: ['./fund.component.css']
})
export class FundComponent implements OnInit {
  Fund!: Fund;
  newFund = <FormGroup>this.FundService.createNewFundForm()
  id = this.route.snapshot.paramMap.get('id');
  constructor(private FundService:FundService,private route:ActivatedRoute) { }

  ngOnInit(): void {
    
    this.FundService.getFund(Number(this.id)).subscribe(data => {

        this.Fund = data
        this.newFund =  this.FundService.mapObjectToForm(this.Fund,this.newFund)
        console.log(this.newFund.value)
    })
  }
 
onClick() {
  this.FundService.editFund(Number(this.id),this.newFund.value).subscribe(data => {
        console.log(data)
    })
   
}
mapObjectToForm(obj:any,form:FormGroup){
  for (const [key, value] of Object.entries(obj)) {
    form.patchValue({[key]:value});
}
return form

}

}
