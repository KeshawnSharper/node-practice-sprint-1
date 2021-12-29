import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormControl,FormGroup } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  books: any[]= []
  newBook = new FormGroup({
    title: new FormControl(''),
    author: new FormControl(''),
    price: new FormControl(0),
    subtitle: new FormControl(''),
    description: new FormControl(''),
    published:new FormControl("2014-12-14T00:00:00.000Z"),
    website:new FormControl(""),
    pages:new FormControl(0),
  })

  // newBook = new FormControl({price:0,website:"",title: "",subtitle: "",author: "",published: "2014-12-14T00:00:00.000Z",pages:"","description":"",});
  // newBook = 
  constructor(private http:HttpClient) { }
  ngOnInit(): void {
    
  }
 
}
