import { Component, OnInit, ViewEncapsulation, Input } from '@angular/core';
import { Status } from '../build.class';

@Component({
  selector: 'app-status-detail',
  templateUrl: './status-detail.component.html',
  styleUrls: ['./status-detail.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class StatusDetailComponent implements OnInit {

  @Input() status: Status;

  constructor() { }

  ngOnInit() {
  }

}
