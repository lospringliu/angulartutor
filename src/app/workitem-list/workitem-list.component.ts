import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Workitem } from '../patch.class';
import { WorkitemService } from '../workitem.service';
// import { ProductBuildService } from '../product-build.service';
// import { OSCATEGORIES } from '../mock';

@Component({
  selector: 'app-workitem-list',
  templateUrl: './workitem-list.component.html',
  styleUrls: ['./workitem-list.component.css'],
  encapsulation: ViewEncapsulation.None
})

export class WorkitemListComponent implements OnInit {

  workitems: Workitem[];

  //constructor(private _oscategoryService: OsCategoryService) { }
  constructor(private _workitemService: WorkitemService) { }
  ngOnInit() { this.getObjects(); }

  getObjects() {
    this._workitemService.getObjects()
    //this._service.getObjects(OsCategory)
        .subscribe(workitems => this.workitems = workitems);
  }

  add(wi_id: number, name: string): void {
    name = name.trim();
    if (!name) { return; }
    this._workitemService.addObject( {  } as Workitem)
        .subscribe(
          workitem => { this.workitems.push(workitem); }
        );
  }

  delete(workitem: Workitem): void {
    this.workitems = this.workitems.filter(h => h !== workitem);
    this._workitemService.deleteObject(workitem).subscribe();
  }

}

