import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Product } from './patch.class';
import { MessageService } from './message.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';
import { of } from 'rxjs/observable/of';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json', 'Authorization': 'Token 7e2df3cdc99303baeb7bff3edf98841917c960e4' })
};

@Injectable()
export class ProductService {

  private _url = 'http://ma1blds3.eng.platformlab.ibm.com:8002/api/patchbuild/product/';

  constructor(private _http: HttpClient, private _messageService: MessageService) { }

  getObjects(): Observable<Product[]> {
    return this._http.get<Product[]>(this._url, httpOptions)
        .pipe(
          //map(resp => resp['results']),
          tap(products => this._log(`fetched objects`)),
          catchError(this._handleError('getObjects',[]))
        );
  }

  getObject(id: number): Observable<Product> {
    const url = `${this._url}${id}/`;
    return this._http.get<Product>(url)
        .pipe(
          tap(_ => this._log(`fetched object with id=${id}`)),
          catchError(this._handleError<Product>(`getObject id=${id}`))
        );
  }

  updateObject(obj: Product): Observable<any> {
    return this._http.patch(`${this._url}${obj.id}/`, obj, httpOptions)
        .pipe(
          tap(_ => this._log(`updated object with id=${obj.id}`)),
          catchError(this._handleError<any>('updateObject'))
        );
  }

  addObject(obj: Product): Observable<Product> {
    return this._http.post<Product>(this._url, obj, httpOptions).pipe(
      tap((obj: Product) => this._log(`added Product with id=${obj.id} `)),
      catchError(this._handleError<Product>('addObject'))
    );
  }

  deleteObject(obj: Product | number): Observable<Product> {
    const id = typeof obj === 'number' ? obj : obj.id;
    const url = `${this._url}${id}/`;
    return this._http.delete<Product>(url,httpOptions).pipe(
      tap(_ => this._log(`deleted Product id=${id}`)),
      catchError(this._handleError<Product>('deleteObject'))
    );
  }

  searchObjects(term: string): Observable<Product[]>{
    if ( !term.trim()) {
      return of([]);
    }
    return this._http.get<Product[]>(`${this._url}?os_name=${term}`).pipe(
      tap(_ => this._log(`found objects matching "${term}"`)),
      catchError(this._handleError<Product[]>('searchObjects',[]))
    );
  }

  private _log(message: string) {
    this._messageService.add('ProductService: ' + message);
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
