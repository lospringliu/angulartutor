import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Workitem  } from './patch.class';
import { MessageService } from './message.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';
import { of } from 'rxjs/observable/of';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json', 'Authorization': 'Token 7e2df3cdc99303baeb7bff3edf98841917c960e4' })
};

@Injectable()
export class WorkitemService {

  private _url = 'http://ma1blds3.eng.platformlab.ibm.com:8002/api/patchbuild/workitem/';

  constructor(private _http: HttpClient, private _messageService: MessageService) { }

  getObjects(): Observable<Workitem[]> {
    return this._http.get<Workitem[]>(this._url, httpOptions)
        .pipe(
          //map(resp => resp['results']),
          tap(oses => this._log(`fetched objects`)),
          catchError(this._handleError('getObjects',[]))
        );
  }

  getObject(id: number): Observable<Workitem> {
    const url = `${this._url}${id}/`;
    return this._http.get<Workitem>(url)
        .pipe(
          tap(_ => this._log(`fetched os with id=${id}`)),
          catchError(this._handleError<Workitem>(`getObject id=${id}`))
        );
  }

  updateObject(obj: Workitem): Observable<any> {
    return this._http.patch(`${this._url}${obj.id}/`, obj, httpOptions)
        .pipe(
          tap(_ => this._log(`updated object with id=${obj.id}`)),
          catchError(this._handleError<any>('updateObject'))
        );
  }

  addObject(obj: Workitem): Observable<Workitem> {
    return this._http.post<Workitem>(this._url, obj, httpOptions).pipe(
      tap((obj: Workitem) => this._log(`added Workitem with id=${obj.id} `)),
      catchError(this._handleError<Workitem>('addObject'))
    );
  }

  deleteObject(obj: Workitem | number): Observable<Workitem> {
    const id = typeof obj === 'number' ? obj : obj.id;
    const url = `${this._url}${id}/`;
    return this._http.delete<Workitem>(url,httpOptions).pipe(
      tap(_ => this._log(`deleted Workitem id=${id}`)),
      catchError(this._handleError<Workitem>('deleteObject'))
    );
  }

  searchObjects(term: string): Observable<Workitem[]>{
    if ( !term.trim()) {
      return of([]);
    }
    return this._http.get<Workitem[]>(`${this._url}?os_name=${term}`).pipe(
      tap(_ => this._log(`found objects matching "${term}"`)),
      catchError(this._handleError<Workitem[]>('searchObjects',[]))
    );
  }

  private _log(message: string) {
    this._messageService.add('WorkitemService: ' + message);
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
