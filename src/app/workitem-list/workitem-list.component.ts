import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Location } from '@angular/common';
import { Router } from '@angular/router';

import { Workitem, Status, Product, Version, FakeTask } from '../patch.class';
import { WorkitemService } from '../workitem.service';
import { VersionService } from '../version.service';
import { ProductService } from '../product.service';
import { PatchStatusService } from '../patch-status.service';

@Component({
  selector: 'app-workitem-list',
  templateUrl: './workitem-list.component.html',
  styleUrls: ['./workitem-list.component.css'],
  encapsulation: ViewEncapsulation.None
})

export class WorkitemListComponent implements OnInit {

  patch_workitems: Workitem[];
  workitems: Workitem[];

  //constructor(private _oscategoryService: OsCategoryService) { }
  constructor(private _workitemService: WorkitemService, private _router: Router, private _location: Location, private _versionService: VersionService, private _productService: ProductService, private _statusService: PatchStatusService) { }
  
  ngOnInit() { 
    this.getPatchObjects();
    this.getObjects(); 
  }

  getObjects() {
    this._workitemService.getObjects()
    //this._service.getObjects(OsCategory)
        .subscribe(workitems => this.workitems = workitems);
  }

  syncObjects() {
    this._workitemService.syncObjects()
        .subscribe(_ => this.getPatchObjects());
  }

  getPatchObjects() {
    this._workitemService.getPartObjects('patches')
    //this._service.getObjects(OsCategory)
        .subscribe(workitems => this.patch_workitems = workitems);
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

  goTo(workitem: Workitem) {
    this._router.navigate(['/workitem-detail/', workitem.wi_id]);
  }
}

