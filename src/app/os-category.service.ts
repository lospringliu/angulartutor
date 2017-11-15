import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { OsCategory } from './build.class';
import { MessageService } from './message.service';
import { OSCATEGORIES } from './mock';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};


@Injectable()
export class OsCategoryService {

  private _oscategoryUrl = 'http://ma1blds3.eng.platformlab.ibm.com:8002/api/oscategory/';
  constructor(private _http: HttpClient, private _messageService: MessageService) { }

  getOsCategories(): Observable<OsCategory[]> {
    return this._http.get<OsCategory[]>(this._oscategoryUrl, httpOptions).pipe(
      map(resp => resp['results']),
      tap(oscategories => this._log('fetched oscategories')),
      catchError(this._handleError<OsCategory[]>('getOsCategories',[]))
    );
  }

  getOsCategory(id: number): Observable<OsCategory> {
    this._messageService.add(`OsCategoryService: fetched oscategory with category_id=${id}`);
    return of(OSCATEGORIES.find(oscategory => oscategory.category_id === id));
  }

  private _log(message: string) {
    this._messageService.add('OsCategoryService: ' + message);
  }

  private _handleError<T>(operation = 'operation', result?: T){
    return (error: any): Observable<T> => {
      console.error(error);
      this._log(`${operation} failed: ${error.message}`);
      return of(result as T);
    }
  }
}
