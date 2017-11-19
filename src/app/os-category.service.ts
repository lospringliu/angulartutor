import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { OsCategory } from './build.class';
import { MessageService } from './message.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json', 'Authorization': 'Token 7e2df3cdc99303baeb7bff3edf98841917c960e4' })
};

@Injectable()
export class OsCategoryService {

  private _oscategoryUrl = 'http://ma1blds3.eng.platformlab.ibm.com:8002/api/productbuild/oscategory/';
  constructor(private _http: HttpClient, private _messageService: MessageService) { }

  getOsCategories(): Observable<OsCategory[]> {
    return this._http.get<OsCategory[]>(this._oscategoryUrl, httpOptions).pipe(
      map(resp => resp['results']),
      tap(oscategories => this._log('fetched oscategories')),
      catchError(this._handleError<OsCategory[]>('getOsCategories',[]))
    );
  }

  getOsCategory(id: number): Observable<OsCategory> {
    const url = `${this._oscategoryUrl}${id}/`;
    return this._http.get<OsCategory>(url)
        .pipe(
          tap(_ => this._log(`fetched oscategory with category_id=${id}`)),
          catchError(this._handleError<OsCategory>(`getOsCategory category_id=${id}`))
        );
  }

  updateOsCategory(oscategory: OsCategory): Observable<any> {
    return this._http.patch(`${this._oscategoryUrl}${oscategory.category_id}/`, oscategory, httpOptions)
        .pipe(
          tap(_ => this._log(`updated oscategory with category_id=${oscategory.category_id}`)),
          catchError(this._handleError<any>('updateOsCategory'))
        );
  }

  addOsCategory(oscategory: OsCategory): Observable<OsCategory> {
    return this._http.post<OsCategory>(this._oscategoryUrl, oscategory, httpOptions).pipe(
      tap((oscategory: OsCategory) => this._log(`added OsCategory with category_id=${oscategory.category_id} `)),
      catchError(this._handleError<OsCategory>('addOsCategory'))
    );
  }

  deleteOsCategory(oscategory: OsCategory | number): Observable<OsCategory> {
    const id = typeof oscategory === 'number' ? oscategory : oscategory.category_id;
    const url = `${this._oscategoryUrl}${id}/`;
    return this._http.delete<OsCategory>(url,httpOptions).pipe(
      tap(_ => this._log(`deleted OsCategory category_id=${id}`)),
      catchError(this._handleError<OsCategory>('deleteOsCategory'))
    );
  }

  searchOsCategoryes(term: string): Observable<OsCategory[]>{
    if ( !term.trim()) {
      return of([]);
    }
    return this._http.get<OsCategory[]>(`${this._oscategoryUrl}?category_name=${term}`).pipe(
      tap(_ => this._log(`found statues matching "${term}"`)),
      catchError(this._handleError<OsCategory[]>('searchOsCategoryes',[]))
    );
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
