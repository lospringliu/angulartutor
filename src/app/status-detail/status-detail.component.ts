import { Component, OnInit, ViewEncapsulation, Input } from '@angular/core';
import { Status } from '../build.class';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { StatusService } from '../status.service';

@Component({
  selector: 'app-status-detail',
  templateUrl: './status-detail.component.html',
  styleUrls: ['./status-detail.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class StatusDetailComponent implements OnInit {

  status: Status;

  constructor(private _route: ActivatedRoute, private _location: Location, private _statusService: StatusService) { }

  ngOnInit() {
    this.getStatus();
  }

  getStatus(): void {
    const id = +this._route.snapshot.paramMap.get('id');
    this._statusService.getStatus(id)
        .subscribe(status => this.status = status);
  }

  save(): void {
    this._statusService.updateStatus(this.status)
        .subscribe(() => this.goBack());
  }
  
  goBack(): void {
    this._location.back();
  }
}
