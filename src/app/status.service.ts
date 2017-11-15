import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { Status } from './build.class';
import { MessageService } from './message.service';
import { STATUSES } from './mock';

@Injectable()
export class StatusService {

  constructor(private _messageService: MessageService) { }

  getStatuses(): Observable<Status[]> {
    this._messageService.add('StatusService: fetched statuses');
    return of(STATUSES);
  }

  getStatus(id: number): Observable<Status> {
    this._messageService.add(`StatusService: fetched status with status_id=${id}`);
    return of(STATUSES.find(status => status.status_id === id));
  }
}
