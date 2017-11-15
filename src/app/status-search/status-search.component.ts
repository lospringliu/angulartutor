import { Component, OnInit, ViewEncapsulation } from '@angular/core';

import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import { of } from 'rxjs/observable/of';

import { debounceTime, distinctUntilChanged, switchMap } from 'rxjs/operators';

import { Status } from '../build.class';
import { StatusService } from '../status.service';

@Component({
  selector: 'app-status-search',
  templateUrl: './status-search.component.html',
  styleUrls: ['./status-search.component.css'],
  encapsulation: ViewEncapsulation.None
})

export class StatusSearchComponent implements OnInit {

  statuses$: Observable<Status[]>;
  private _searchTerms = new Subject<string>();

  constructor(private _statusService: StatusService) { }

  ngOnInit(): void {
    this.statuses$ = this._searchTerms.pipe(
      debounceTime(300),
      distinctUntilChanged(),
      switchMap((term: string) => this._statusService.searchStatuses(term))
    );
  }

  search(term: string): void {
    this._searchTerms.next(term);
  }
}
