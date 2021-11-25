import { Component, OnInit } from '@angular/core';
import {Book} from '../../model/book';
import {BookService} from '../../service/book.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {
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

  updateBook() {
    this._bookService.updateBook(this.book).subscribe(
      res => {
        console.log(res);
        this._router.navigate(['/']);
      },
      err => console.log(err)
    );
  }
}
