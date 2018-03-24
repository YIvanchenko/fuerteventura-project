import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { AngularFirestore, AngularFirestoreDocument, AngularFirestoreCollection } from 'angularfire2/firestore';

import { IRepository } from "../services/irepository";

import { Book } from "../models/book";


@Injectable()
export class BookService implements IRepository<Book>{

  private basePath = "/books";
  
  private readonly bookFirestoreCollection: AngularFirestoreCollection<Book>;

  constructor(private ngFirestore: AngularFirestore) {
    this.bookFirestoreCollection = ngFirestore.collection<Book>(this.basePath);
  }
  
  getAll(): Observable<Book[]>  {
    return this.bookFirestoreCollection.snapshotChanges().map((actions) => {
      return actions.map((action) => {
        const book = action.payload.doc.data() as Book;
        book.id = action.payload.doc.id;
        return book;
      });
    });
  }

  get(id: string): Observable<Book> {
    return this.bookFirestoreCollection.doc<Book>(`${this.basePath}/${id}`).valueChanges();
  }

  add(entity: Book): void {
    this.bookFirestoreCollection.add(entity);
  }

  update(id: string, entity: Book): void {
    this.bookFirestoreCollection.doc<Book>(`${this.basePath}/${id}`).update(entity);
  }

  delete(id: string): void {
    this.bookFirestoreCollection.doc<Book>(`${this.basePath}/${id}`).delete();
  }

}
