import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Status } from '../build.class';
// import { STATUSES } from '../mock';
import { StatusService } from '../status.service';

@Component({
  selector: 'app-status',
  templateUrl: './status.component.html',
  styleUrls: ['./status.component.css'],
  encapsulation: ViewEncapsulation.None
})

export class StatusComponent implements OnInit {

  selectedStatus: Status;
  statuses: Status[];

  constructor(private _statusService: StatusService) {}

  ngOnInit() {
    this.getStatuses();
  }

  getStatuses(): void {
    this._statusService.getStatuses()
      .subscribe(statuses => this.statuses = statuses);
  }
  
  onSelect(status: Status): void {
    this.selectedStatus = status;
  }
}
