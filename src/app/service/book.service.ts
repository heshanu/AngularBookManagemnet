import { Injectable } from '@angular/core';
import { Book } from '../models/book';
import { Observable, of, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BookService {


  constructor() { }

  public addBook(book: Book): Observable<Book> {

    const err = new Error('TEST');

    return throwError(() => err);

    return of(book);
  }

}
