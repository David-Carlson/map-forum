import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import {HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';

import { MessagesService } from './messages.service';
import { User } from '../beans/user';


const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
@Injectable({
  providedIn: 'root'
})
export class UserService {
  private userUrl = 'api/users'

  constructor(
    private httpClient: HttpClient, 
    private messageService: MessagesService) { }

  getUser(username: string): Observable<User> {
    return this.httpClient.get<User[]>(this.userUrl + `/?name=${username}`)
      .pipe(
        tap(_ => this.log('fetched User')),
        catchError(this.handleError('getUser', null))
      );
  }
  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      // TODO: send the error to remove logging
      console.error(error);
      // TODO: Write it better
      this.log(`${operation} failed: ${error.message}`);
      return of(result as T);
    }
  }
  private log(message: string) {
    console.log(`MapService: ${message}`)
    this.messageService.add(`MapService: ${message}`)
  }
}
