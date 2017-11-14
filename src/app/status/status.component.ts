import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Status } from '../build.class';

@Component({
  selector: 'app-status',
  templateUrl: './status.component.html',
  styleUrls: ['./status.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class StatusComponent implements OnInit {

  status: Status = {
    status_id: 1,
    status_name: 'open',
  }
  constructor() { }

  ngOnInit() {
  }

}
