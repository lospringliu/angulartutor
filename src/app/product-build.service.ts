import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
// import { Status } from './build.class';
import { MessageService } from './message.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';
import { of } from 'rxjs/observable/of';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json', 'Authorization': 'Token 7e2df3cdc99303baeb7bff3edf98841917c960e4' })
};

@Injectable()
export class ProductBuildService {

  private _url = 'http://ma1blds3.eng.platformlab.ibm.com:8002/api/productbuild/';

  constructor(private _http: HttpClient, private _messageService: MessageService) { } ;

  getObjects<T>(objectclass: T): Observable<T[]> {
    return this._http.get<T[]>(this._url, httpOptions)
        .pipe(
          map(resp => resp['results']),
          tap(heroes => this._log(`fetched objects`)),
          catchError(this._handleError('getObjects',[]))
        );
  }

  getObject(id: number): Observable<any> {
    const url = `${this._url}${id}/`;
    return this._http.get<any>(url)
        .pipe(
          tap(_ => this._log(`fetched object with sid=${id}`)),
          catchError(this._handleError<any>(`getInstance id=${id}`))
        );
  }

  updateObject(instance: any): Observable<any> {
    return this._http.patch(`${this._url}${instance.id}/`, instance, httpOptions)
        .pipe(
          tap(_ => this._log(`updated object with id=${instance.id}`)),
          catchError(this._handleError<any>('updateobject'))
        );
  }

  addObject(instance: any): Observable<any> {
    return this._http.post<any>(this._url, instance, httpOptions).pipe(
      tap((instance: any) => this._log(`added object with id=${instance.id} `)),
      catchError(this._handleError<any>('addObject'))
    );
  }

  deleteObject(instance: any | number): Observable<any> {
    const id = typeof instance === 'number' ? instance : instance.id;
    const url = `${this._url}${id}/`;
    return this._http.delete<any>(url,httpOptions).pipe(
      tap(_ => this._log(`deleted object status_id=${id}`)),
      catchError(this._handleError<any>('deleteObject'))
    );
  }

  searchObjects(term: string): Observable<any[]>{
    if ( !term.trim()) {
      return of([]);
    }
    return this._http.get<any[]>(`${this._url}?name=${term}`).pipe(
      tap(_ => this._log(`found objects matching "${term}"`)),
      catchError(this._handleError<any[]>('searchObjects',[]))
    );
  }

  private _log(message: string) {
    this._messageService.add('ProductBuildService: ' + message);
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