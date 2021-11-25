import { Component, OnInit } from '@angular/core';
import {Book} from '../../model/book';
import {BookService} from '../../service/book.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.css']
})
export class DeleteComponent implements OnInit {
  book: Book = {};

  id: number;

  constructor(private _bookService: BookService,
              private _router: Router,
              private _activeRouter: ActivatedRoute) {
    this.id = this._activeRouter.snapshot.params['id'];
    this._bookService.getBook(this.id).subscribe(data => {
      this.book = data;
    });
  }

  ngOnInit() {
  }

  deleteBook() {
    this._bookService.deleteBook(this.id).subscribe(data => {
      this._router.navigate(['/']);
    });
  }

}
