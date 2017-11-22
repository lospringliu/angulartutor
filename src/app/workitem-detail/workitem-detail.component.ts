import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Workitem } from '../patch.class';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { WorkitemService } from '../workitem.service';

@Component({
  selector: 'app-workitem-detail',
  templateUrl: './workitem-detail.component.html',
  styleUrls: ['./workitem-detail.component.css'],
  encapsulation: ViewEncapsulation.None
})

export class WorkitemDetailComponent implements OnInit {

  workitem: Workitem;
  
  constructor(private _route: ActivatedRoute, private _location: Location, private _workitemService: WorkitemService) { }

  ngOnInit() {
    this.getObject();
  }

  getObject(): void {
    const id = +this._route.snapshot.paramMap.get('id') ;
    this._workitemService.getObject(id)
        .subscribe(workitem => this.workitem = workitem);
  }

  save(): void {
    this._workitemService.updateObject(this.workitem)
        .subscribe(() => this.goBack());
  }

  goBack(): void {
    this._location.back();
  }
}
