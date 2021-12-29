import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FormControl,FormGroup } from '@angular/forms';
import { Observable, of } from 'rxjs';
import { Book } from './book';

@Injectable({
  providedIn: 'root'
})
export class BookService {
api = `http://localhost:8082/api/funds/`
  constructor(private httpClient:HttpClient) { 

  }
  editBook(id:number,newBook:Book):Observable<Book>{
    return this.httpClient.put<Book>(this.api + id ,newBook)
  }
  getAllBooks():Observable<Book[]>{
    return this.httpClient.get<Book[]>(this.api)
  }
  deleteBook(id:number):Observable<Book[]>{
    return this.httpClient.delete<Book[]>(this.api + id)
  }
  addBook(newBook:Book):Observable<Book>{
    return this.httpClient.post<Book>(this.api,newBook)
  }
  getBook(id:number):Observable<Book>{
    return this.httpClient.get<Book>(this.api + id)
  }
  mapObjectToForm(obj:any,form:FormGroup){
    for (const [key, value] of Object.entries(obj)) {
      form.patchValue({[key]:value});
  
  }
return form
}
  createNewBookForm() {
    let newBook = new FormGroup({
      title: new FormControl(""),
      author: new FormControl(''),
      price: new FormControl(0),
      subtitle: new FormControl(''),
      description: new FormControl(''),
      published:new FormControl("2014-12-14T00:00:00.000Z"),
      website:new FormControl(""),
      pages:new FormControl(0),
    })
    let book = {
      title: "",
      author: '',
      price: 0,
      subtitle: '',
      description: '',
      published:"2014-12-14T00:00:00.000Z",
      website:"",
      pages:0,
  }
  return this.mapObjectToForm(book,newBook)
  }
 
  
  
}
