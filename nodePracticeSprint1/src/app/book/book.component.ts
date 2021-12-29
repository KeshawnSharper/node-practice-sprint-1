import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormControl,FormGroup } from '@angular/forms';
import { BookService } from '../book.service';
import { Book } from '../book';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit {
book!: Book;
newBook = <FormGroup>this.BookService.createNewBookForm()
id = this.route.snapshot.paramMap.get('id');
constructor(private http: HttpClient,private route: ActivatedRoute,private BookService: BookService) { }

  ngOnInit(): void {
    
    this.BookService.getBook(Number(this.id)).subscribe(data => {

        this.book = data
        this.newBook =  this.BookService.mapObjectToForm(this.book,this.newBook)
        console.log(this.newBook.value)
    })
  }
 
onClick() {
  this.BookService.editBook(Number(this.id),this.newBook.value).subscribe(data => {
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
