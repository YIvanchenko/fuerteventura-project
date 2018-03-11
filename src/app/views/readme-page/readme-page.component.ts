import { Component } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { Book } from "../../models/book";
import { BookService } from "../../services/book.service";

@Component({
  selector: 'readme-page',
  templateUrl: './readme-page.component.html',
  styleUrls: ['./readme-page.component.scss'],
})
export class ReadmePageComponent {
  books: Observable<Book[]>;

  constructor(bookService: BookService) {
    this.books = bookService.getAll();
  }
}
