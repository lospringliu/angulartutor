
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Version } from './patch.class';
import { MessageService } from './message.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';
import { of } from 'rxjs/observable/of';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json', 'Authorization': 'Token 7e2df3cdc99303baeb7bff3edf98841917c960e4' })
};

@Injectable()
export class VersionService {

  private _url = 'http://ma1blds3.eng.platformlab.ibm.com:8002/api/patchbuild/version/';

  constructor(private _http: HttpClient, private _messageService: MessageService) { }

  getObjects(): Observable<Version[]> {
    return this._http.get<Version[]>(this._url, httpOptions)
        .pipe(
          //map(resp => resp['results']),
          tap(versions => this._log(`fetched objects`)),
          catchError(this._handleError('getObjects',[]))
        );
  }

  getObject(id: number): Observable<Version> {
    const url = `${this._url}${id}/`;
    return this._http.get<Version>(url)
        .pipe(
          tap(_ => this._log(`fetched object with id=${id}`)),
          catchError(this._handleError<Version>(`getObject id=${id}`))
        );
  }

  updateObject(obj: Version): Observable<any> {
    return this._http.patch(`${this._url}${obj.id}/`, obj, httpOptions)
        .pipe(
          tap(_ => this._log(`updated object with id=${obj.id}`)),
          catchError(this._handleError<any>('updateObject'))
        );
  }

  addObject(obj: Version): Observable<Version> {
    return this._http.post<Version>(this._url, obj, httpOptions).pipe(
      tap((obj: Version) => this._log(`added Version with id=${obj.id} `)),
      catchError(this._handleError<Version>('addObject'))
    );
  }

  deleteObject(obj: Version | number): Observable<Version> {
    const id = typeof obj === 'number' ? obj : obj.id;
    const url = `${this._url}${id}/`;
    return this._http.delete<Version>(url,httpOptions).pipe(
      tap(_ => this._log(`deleted Version id=${id}`)),
      catchError(this._handleError<Version>('deleteObject'))
    );
  }

  searchObjects(term: string): Observable<Version[]>{
    if ( !term.trim()) {
      return of([]);
    }
    return this._http.get<Version[]>(`${this._url}?os_name=${term}`).pipe(
      tap(_ => this._log(`found objects matching "${term}"`)),
      catchError(this._handleError<Version[]>('searchObjects',[]))
    );
  }

  private _log(message: string) {
    this._messageService.add('VersionService: ' + message);
  }

  private _handleError<T>(operation = 'operation', result?: T){
    return (error: any): Observable<T> => {
      console.error(error);
      console.dir(error);
      this._log(`${operation} failed: ${error.message}`);
      return of(result as T);
    }
  }
}
