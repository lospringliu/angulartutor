import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Status } from './patch.class';
import { MessageService } from './message.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';
import { of } from 'rxjs/observable/of';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json', 'Authorization': 'Token 7e2df3cdc99303baeb7bff3edf98841917c960e4' })
};

@Injectable()
export class PatchStatusService {

  private _statusUrl = 'http://ma1blds3.eng.platformlab.ibm.com:8002/api/patchbuild/status/';

  constructor(private _http: HttpClient, private _messageService: MessageService) { }

  getObjects(): Observable<Status[]> {
    return this._http.get<Status[]>(this._statusUrl, httpOptions)
        .pipe(
          //map(resp => resp['results']),
          tap(statuses => this._log(`fetched objects`)),
          catchError(this._handleError('getObjects',[]))
        );
  }

  getStatus(id: number): Observable<Status> {
    const url = `${this._statusUrl}${id}/`;
    return this._http.get<Status>(url)
        .pipe(
          tap(_ => this._log(`fetched object with id=${id}`)),
          catchError(this._handleError<Status>(`getObject id=${id}`))
        );
  }

  updateStatus(status: Status): Observable<any> {
    return this._http.patch(`${this._statusUrl}${status.id}/`, status, httpOptions)
        .pipe(
          tap(_ => this._log(`updated status with status_id=${status.id}`)),
          catchError(this._handleError<any>('updateStatus'))
        );
  }

  addStatus(status: Status): Observable<Status> {
    return this._http.post<Status>(this._statusUrl, status, httpOptions).pipe(
      tap((status: Status) => this._log(`added Status with id=${status.id} `)),
      catchError(this._handleError<Status>('addStatus'))
    );
  }

  deleteStatus(status: Status | number): Observable<Status> {
    const id = typeof status === 'number' ? status : status.id;
    const url = `${this._statusUrl}${id}/`;
    return this._http.delete<Status>(url,httpOptions).pipe(
      tap(_ => this._log(`deleted Status id=${id}`)),
      catchError(this._handleError<Status>('deleteStatus'))
    );
  }

  private _log(message: string) {
    this._messageService.add('StatusService: ' + message);
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