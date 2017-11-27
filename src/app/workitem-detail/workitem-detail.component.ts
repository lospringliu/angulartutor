import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Workitem, Product, Version, FakeTask, Status } from '../patch.class';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { WorkitemService } from '../workitem.service';
import { VersionService } from '../version.service';
import { ProductService } from '../product.service';
import { PatchStatusService } from '../patch-status.service';

@Component({
  selector: 'app-workitem-detail',
  templateUrl: './workitem-detail.component.html',
  styleUrls: ['./workitem-detail.component.css'],
  encapsulation: ViewEncapsulation.None
})

export class WorkitemDetailComponent implements OnInit {

  wi_id: number;
  workitem: Workitem;
  status: Status;
  version: Version;
  product: Product;
  tasktemplate: FakeTask;

  STATUSES: Status[];
  VERSIONS: Version[];
  PRODUCTS: Product[];
  TASKTEMPLATES: FakeTask[];

  task_template: FakeTask;
  task_finished: boolean = false;
  
  constructor(private _route: ActivatedRoute, private _location: Location, private _workitemService: WorkitemService, private _versionService: VersionService, private _productService: ProductService, private _statusService: PatchStatusService) { }

  ngOnInit() {
    this.wi_id = +this._route.snapshot.paramMap.get('id') ;
    this.get_TASKTEMPLATES();
    this.get_STATUSES();
    this.get_VERSIONS();
    this.get_PRODUCTS();
    this.getObject();
  }

  on_task_submit(id: number): void {
    this.task_finished = true;
    if ( this.workitem.task_template !== id ) {
      this.workitem.task_template = id;
      this.save();
    } 
  }

  get_TASKTEMPLATES(): void {
    const id = +this._route.snapshot.paramMap.get('id') ;
    this._workitemService.getTaskTemplates(id)
        .subscribe(tasktemplates => this.TASKTEMPLATES = tasktemplates.sort((t1,t2) => {
          let s1 = t1.task_name.toUpperCase();
          let s2 = t2.task_name.toUpperCase();
          if ( s1 > s2 ) {
            return 1;
          }
          else if ( s1 < s2 ) {
            return -1;
          }
          else {
            return 0;
          }
        }));
  }

  get_STATUSES():void {
    this._statusService.getObjects()
        .subscribe(statuses => this.STATUSES = statuses);
  }

  get_Status(id: number): void {
    this.status = this.STATUSES.filter(status => status.id === id)[0];
  }
  
  get_VERSIONS(): void {
    this._versionService.getObjects()
        .subscribe(versions => this.VERSIONS = versions);
  }

  get_Version(id: number): void {
    this.version = this.VERSIONS.filter(version => version.id === id)[0];
  }

  get_PRODUCTS(): void {
    this._productService.getObjects()
        .subscribe(products => this.PRODUCTS = products);
  }

  get_Product(id: number): void {
    this.product = this.PRODUCTS.filter(product => product.id === id)[0];
  }

  syncObject(): void {
    this._workitemService.syncObject(this.workitem.id)
        .subscribe(workitem => { 
          window.location.reload(true);
        });
  }

  getObject(): void {
    this._workitemService.getObject(this.wi_id)
        .subscribe(workitem => {
          if ( this.TASKTEMPLATES === undefined || this.TASKTEMPLATES === null || this.TASKTEMPLATES === [] ) {
            this.get_TASKTEMPLATES();
          }
          this.get_Status(workitem.status);
          if ( workitem.version > 0 ) {
            this.get_Version(workitem.version);
          }
          if ( workitem.product > 0 ) {
            this.get_Product(workitem.product);
          }
          this.workitem = workitem;
        });
  }

  save(): void {
    //this._workitemService.updateObject({ id: this.workitem.id, product: this.workitem.product, version: this.workitem.version, task_template: this.workitem.task_template } as Workitem)
    this._workitemService.updateObject( this.workitem )
        .subscribe(() => alert('workitem saved!'));
  }

  goBack(): void {
    this._location.back();
  }
}
