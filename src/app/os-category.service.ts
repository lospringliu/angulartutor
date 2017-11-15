import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { OsCategory } from './build.class';
import { MessageService } from './message.service';
import { OSCATEGORIES } from './mock';

@Injectable()
export class OsCategoryService {

  constructor(private _messageService: MessageService) { }

  getOsCategories(): Observable<OsCategory[]> {
    this._messageService.add('OsCategoryService: fetched oscategories');
    return of(OSCATEGORIES);
  }
}
