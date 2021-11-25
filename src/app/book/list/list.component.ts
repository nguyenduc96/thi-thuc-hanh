import { Component, OnInit } from '@angular/core';
import {BookService} from '../../service/book.service';
import {Router} from '@angular/router';
import {Book} from '../../model/book';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  books: Book[] = [];

  book: Book = {};

  constructor(private _bookService: BookService,
              private _router: Router) { }

  ngOnInit() {
    this.getAllBooks();
  }

  getAllBooks() {
    this._bookService.getBooks().subscribe(
      data => {
        this.books = data;
        console.table(this.books);
      },
      error => {
        console.log(error);
      }
    );
  }

}
