import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Task, TaskProject } from './build.class';
import { MessageService } from './message.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';
import { of } from 'rxjs/observable/of';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json', 'Authorization': 'Token 7e2df3cdc99303baeb7bff3edf98841917c960e4' })
};

@Injectable()
export class TaskService {
    
  private _url = 'http://ma1blds3.eng.platformlab.ibm.com:8002/api/productbuild/task/';

  constructor(private _http: HttpClient, private _messageService: MessageService) { }

  getObjects(): Observable<Task[]> {
    return this._http.get<Task[]>(this._url, httpOptions)
        .pipe(
          //map(resp => resp['results']),
          tap(_ => this._log(`fetched objects`)),
          catchError(this._handleError('getObjects',[]))
        );
  }

  getPartObjects(filter_url_string: string): Observable<Task[]> {
    return this._http.get<Task[]>(`${this._url}${filter_url_string}/`, httpOptions)
        .pipe(
          //map(resp => resp['results']),
          tap(workitems => this._log(`fetched objects`)),
          catchError(this._handleError('getObjects',[]))
        );
  }

  getObject(id: number): Observable<Task> {
    const url = `${this._url}${id}/`;
    return this._http.get<Task>(url)
        .pipe(
          tap(_ => this._log(`fetched object with id=${id}`)),
          catchError(this._handleError<Task>(`getObject id=${id}`))
        );
  }

  updateObject(obj: Task): Observable<any> {
    return this._http.patch(`${this._url}${obj.task_id}/`, { task_id: obj.task_id, task_name: obj.task_name, build_no: obj.build_no, branch: obj.branch, work: obj.work, workw: obj.workw, reldir: obj.reldir, checkout: obj.checkout, strip: obj.strip, auto_report: obj.auto_report, auto_clean: obj.auto_clean, status: obj.status, env: obj.env, mailto: obj.mailto, schedule: obj.schedule, comments: obj.comments, user: obj.user, threshold: obj.threshold, keep_days: obj.keep_days } as Task, httpOptions)
    //return this._http.post(`${this._url}`, obj, httpOptions)
        .pipe(
          tap(_ => this._log(`updated object with id=${obj.task_id}`)),
          catchError(this._handleError<any>('updateObject'))
        );
  }

  addObject(obj: Task): Observable<Task> {
    return this._http.post<Task>(this._url, obj, httpOptions).pipe(
      tap((obj: Task) => this._log(`added Task with id=${obj.task_id} `)),
      catchError(this._handleError<Task>('addObject'))
    );
  }

  deleteObject(obj: Task | number): Observable<Task> {
    const id = typeof obj === 'number' ? obj : obj.task_id;
    const url = `${this._url}${id}/`;
    return this._http.delete<Task>(url,httpOptions).pipe(
      tap(_ => this._log(`deleted Task id=${id}`)),
      catchError(this._handleError<Task>('deleteObject'))
    );
  }

  searchObjects(term: string): Observable<Task[]>{
    if ( !term.trim()) {
      return of([]);
    }
    return this._http.get<Task[]>(`${this._url}?task_name=${term}`).pipe(
      tap(_ => this._log(`found objects matching "${term}"`)),
      catchError(this._handleError<Task[]>('searchObjects',[]))
    );
  }

  private _log(message: string) {
    this._messageService.add('TaskService: ' + message);
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

