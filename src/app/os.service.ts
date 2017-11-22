import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Os } from './build.class';
import { MessageService } from './message.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';
import { of } from 'rxjs/observable/of';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json', 'Authorization': 'Token 7e2df3cdc99303baeb7bff3edf98841917c960e4' })
};

@Injectable()
export class OsService {

  private _url = 'http://ma1blds3.eng.platformlab.ibm.com:8002/api/productbuild/os/';

  constructor(private _http: HttpClient, private _messageService: MessageService) { }

  getObjects(): Observable<Os[]> {
    return this._http.get<Os[]>(this._url, httpOptions)
        .pipe(
          map(resp => resp['results']),
          tap(oses => this._log(`fetched objects`)),
          catchError(this._handleError('getObjects',[]))
        );
  }

  getObject(id: number): Observable<Os> {
    const url = `${this._url}${id}/`;
    return this._http.get<Os>(url)
        .pipe(
          tap(_ => this._log(`fetched os with os_id=${id}`)),
          catchError(this._handleError<Os>(`getObject os_id=${id}`))
        );
  }

  updateObject(obj: Os): Observable<any> {
    return this._http.patch(`${this._url}${obj.os_id}/`, obj, httpOptions)
        .pipe(
          tap(_ => this._log(`updated object with os_id=${obj.os_id}`)),
          catchError(this._handleError<any>('updateObject'))
        );
  }

  addObject(obj: Os): Observable<Os> {
    return this._http.post<Os>(this._url, obj, httpOptions).pipe(
      tap((obj: Os) => this._log(`added Os with os_id=${obj.os_id} `)),
      catchError(this._handleError<Os>('addObject'))
    );
  }

  deleteObject(obj: Os | number): Observable<Os> {
    const id = typeof obj === 'number' ? obj : obj.os_id;
    const url = `${this._url}${id}/`;
    return this._http.delete<Os>(url,httpOptions).pipe(
      tap(_ => this._log(`deleted Os os_id=${id}`)),
      catchError(this._handleError<Os>('deleteObject'))
    );
  }

  searchObjects(term: string): Observable<Os[]>{
    if ( !term.trim()) {
      return of([]);
    }
    return this._http.get<Os[]>(`${this._url}?os_name=${term}`).pipe(
      tap(_ => this._log(`found objects matching "${term}"`)),
      catchError(this._handleError<Os[]>('searchObjects',[]))
    );
  }

  private _log(message: string) {
    this._messageService.add('OsService: ' + message);
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