import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import {HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';

import { MessagesService } from './messages.service';
import { UserMap } from '../beans/user-map';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
const textHttpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'text/plain' })
};

@Injectable({
  providedIn: 'root'
})
export class MapService {
  // private mapUrl = 'http://localhost:8080/api/maps';
  private mapUrl = 'http://localhost:8080/api/maps';

  constructor(
    private http: HttpClient,
    private messageService: MessagesService) { }

  getMapList(): Observable<UserMap[]> {
    this.messageService.add('MapService: fetched mapList');
    return this.http.get<UserMap[]>(this.mapUrl)
      .pipe(
        tap(_ => this.log('fetched mapList')),
        catchError(this.handleError('getMaps', []))
      );
  }

  getUserMaps(username: string): Observable<UserMap[]> {
    let userMapUrl = this.mapUrl + `/?username=${username}`
    this.messageService.add(`MapService: fetched maps by ${username}`);
    return this.http.get<UserMap[]>(userMapUrl)
      .pipe(
        tap(_ => this.log('fetched UserMaps')),
        catchError(this.handleError('getUserMaps', []))
      );
  }
  // TODO: Test this
  getMap(name: string): Observable<UserMap[]> {
    let singleMapUrl = this.mapUrl + `/?name=${name}`;
    return this.http.get<UserMap[]>(singleMapUrl)
      .pipe(
        tap(_ => this.log('fetched single map')),
        catchError(this.handleError('getMap', []))
      );
  }
  getPendingAndResolvedMaps(allMaps: UserMap[]): any {
    var pending: UserMap[];
    var resolved: UserMap[];
    pending = allMaps.filter(m => m.status === 'pending');
    resolved = allMaps.filter(m => !(m.status === 'pending'));
    return { 'pending': pending, 'resolved': resolved };
  }
  approveMap(mapName: string): Observable<any> {
    let approveUrl = this.mapUrl + `/approve`;
    console.log(mapName);
    return this.http.post<string>(approveUrl, mapName, textHttpOptions)
      .pipe(
        tap(_ => this.log(`approved map ${mapName}`)),
        catchError(this.handleError('approveMap', null))
      );
  }
  getMyMaps(): Observable<UserMap[]> {
    let singleMapUrl = this.mapUrl + `/me`;
    return this.http.get<UserMap[]>(singleMapUrl)
      .pipe(
        tap(_ => this.log('fetched my maps')),
        catchError(this.handleError('getMyMap', []))
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
