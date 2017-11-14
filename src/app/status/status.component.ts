import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Status } from '../build.class';
import { STATUSES } from '../mock';

@Component({
  selector: 'app-status',
  templateUrl: './status.component.html',
  styleUrls: ['./status.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class StatusComponent implements OnInit {

  selectedStatus: Status;
  statuses = STATUSES;

  constructor() { }

  ngOnInit() {
  }

  onSelect(status: Status): void {
    this.selectedStatus = status;
  }
}
