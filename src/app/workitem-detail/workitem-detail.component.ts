import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Workitem, Product, Version, FakeTask, Status } from '../patch.class';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { WorkitemService } from '../workitem.service';
import { VersionService } from '../version.service';
import { ProductService } from '../product.service';
import { PatchStatusService } from '../patch-status.service';
import { WorkitemTaskDetailComponent } from './workitem-task-detail/workitem-task-detail.component';

@Component({
  selector: 'app-workitem-detail',
  templateUrl: './workitem-detail.component.html',
  styleUrls: ['./workitem-detail.component.css'],
  encapsulation: ViewEncapsulation.None
})

export class WorkitemDetailComponent implements OnInit {

  wi_id: number;
  workitem: Workitem;
  //status: Status;
  //version: Version;

  //STATUSES: Status[];
  //VERSIONS: Version[];
  //PRODUCTS: Product[];
  TASKTEMPLATES: FakeTask[];

  task_template: FakeTask;
  template_finished: boolean = false;

  readonly_file_task: boolean = true;
  
  constructor(private _route: ActivatedRoute, private _location: Location, private _workitemService: WorkitemService, private _versionService: VersionService, private _productService: ProductService, private _statusService: PatchStatusService) { }

  ngOnInit() {
    this.wi_id = +this._route.snapshot.paramMap.get('id') ;
    this.get_TASKTEMPLATES();
    //this.get_STATUSES();
    //this.get_VERSIONS();
    this.getObject();
  }

  on_template_submit(id: number): void {
    this.get_TaskTemplate(id);
    if ( this.workitem.task_template !== id ) {
      this.workitem.task_template = id;
      this.save();
    } 
    this.template_finished = true;
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

  get_TaskTemplate(id: number): void {
    this.task_template = this.TASKTEMPLATES.filter(faketask => faketask.id === id)[0];
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
          this.workitem = workitem;
        });
  }

  save(): void {
    //this._workitemService.updateObject({ id: this.workitem.id, product: this.workitem.product, version: this.workitem.version, task_template: this.workitem.task_template } as Workitem)
    this._workitemService.updateObject( this.workitem )
        .subscribe(() => alert('workitem saved!'));
  }

  run(): void {
    //this._workitemService.updateObject({ id: this.workitem.id, product: this.workitem.product, version: this.workitem.version, task_template: this.workitem.task_template } as Workitem)
    this._workitemService.updateObject( this.workitem, true )
         .subscribe(_ => alert(_['status']));
  }

  onTaskFile(taskfile: string) {
    this.workitem.file_task = taskfile ;
    this.readonly_file_task = false ;
  }

  goBack(): void {
    this._location.back();
  }
}
