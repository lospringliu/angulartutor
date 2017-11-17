import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Status } from '../build.class';
import { StatusService } from '../status.service';

@Component({
  selector: 'app-status',
  templateUrl: './status.component.html',
  styleUrls: ['./status.component.css'],
  encapsulation: ViewEncapsulation.None
})

export class StatusComponent implements OnInit {

  statuses: Status[];
  private _laststatus = null;

  constructor(private _statusService: StatusService) {}

  ngOnInit() {
    this.getStatuses();
  }

  getLastStatus(): void {
    this.getStatuses();
    this._laststatus = this.statuses.reduce( (x,y) => x.status_id > y.status_id ? x : y);
  }

  getStatuses(): void {
    this._statusService.getStatuses()
      .subscribe(statuses => this.statuses = statuses);
  }
  
  add(name: string): void {
    name = name.trim();
    if (!name) { return; }
    this.getLastStatus();
    this._statusService.addStatus( { status_id: this._laststatus.status_id + 1, status_name: name } as Status)
        .subscribe(
          status => { this.statuses.push(status); }
        );
  }

  delete(status: Status): void {
    this.statuses = this.statuses.filter(h => h !== status);
    this._statusService.deleteStatus(status).subscribe();
  }
}
