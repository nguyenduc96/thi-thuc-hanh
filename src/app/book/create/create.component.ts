import { Component, OnInit } from '@angular/core';
import {Book} from '../../model/book';
import {BookService} from '../../service/book.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {
  book: Book = {};

  constructor(private _bookService: BookService,
              private _router: Router) { }

  ngOnInit() {
  }

  createBook() {
    this._bookService.addBook(this.book).subscribe(
      (book: Book) => {
        this._router.navigate(['']);
        console.log(book);
      },
      (error) => {
        console.log(error);
      }
    );
  }
}
