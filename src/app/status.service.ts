import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Status } from './build.class';
import { MessageService } from './message.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';
import { of } from 'rxjs/observable/of';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class StatusService {

  private _statusUrl = 'api/statuses';

  constructor(private _http: HttpClient, private _messageService: MessageService) { }

  getStatuses(): Observable<Status[]> {
    return this._http.get<Status[]>(this._statusUrl)
        .pipe(
          tap(heroes => this._log(`fetched statuses`)),
          catchError(this._handleError('getStatuses',[]))
        );
  }

  getStatus(id: number): Observable<Status> {
    const url = `${this._statusUrl}/${id}`;
    return this._http.get<Status>(url)
        .pipe(
          tap(_ => this._log(`fetched status with status_id=${id}`)),
          catchError(this._handleError<Status>(`getStatus status_id=${id}`))
        );
  }

  updateStatus(status: Status): Observable<any> {
    return this._http.put(this._statusUrl, status, httpOptions)
        .pipe(
          tap(_ => this._log(`updated status with status_id=${status.id}`)),
          catchError(this._handleError<any>('updateStatus'))
        );
  }

  addStatus(status: Status): Observable<Status> {
    return this._http.post<Status>(this._statusUrl, status, httpOptions).pipe(
      tap((status: Status) => this._log(`added Status with status_id=${status.id} `)),
      catchError(this._handleError<Status>('addStatus'))
    );
  }

  deleteStatus(status: Status | number): Observable<Status> {
    const id = typeof status === 'number' ? status : status.id;
    const url = `${this._statusUrl}/${id}`;
    return this._http.delete<Status>(url,httpOptions).pipe(
      tap(_ => this._log(`deleted Status status_id=${id}`)),
      catchError(this._handleError<Status>('deleteStatus'))
    );
  }

  searchStatuses(term: string): Observable<Status[]>{
    if ( !term.trim()) {
      return of([]);
    }
    return this._http.get<Status[]>(`${this._statusUrl}/?status_name=${term}`).pipe(
      tap(_ => this._log(`found statues matching "${term}"`)),
      catchError(this._handleError<Status[]>('searchStatuses',[]))
    );
  }

  private _log(message: string) {
    this._messageService.add('StatusService: ' + message);
  }

  private _handleError<T>(operation = 'operation', result?: T){
    return (error: any): Observable<T> => {
      console.error(error);
      this._log(`${operation} failed: ${error.message}`);
      return of(result as T);
    }
  }
}
