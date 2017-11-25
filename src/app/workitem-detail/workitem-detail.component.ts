import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Workitem, Product, Version, FakeTask } from '../patch.class';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { WorkitemService } from '../workitem.service';
import { VersionService } from '../version.service';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-workitem-detail',
  templateUrl: './workitem-detail.component.html',
  styleUrls: ['./workitem-detail.component.css'],
  encapsulation: ViewEncapsulation.None
})

export class WorkitemDetailComponent implements OnInit {

  workitem: Workitem;
  VERSIONS: Version[];
  PRODUCTS: Product[];
  TASKTEMPLATES: FakeTask[];

  task_template: FakeTask;
  task_finished: boolean = false;
  
  constructor(private _route: ActivatedRoute, private _location: Location, private _workitemService: WorkitemService, private _versionService: VersionService, private _productService: ProductService) { }

  ngOnInit() {
    this.get_VERSIONS();
    this.get_PRODUCTS();
    this.get_TASKTEMPLATES();
    this.getObject();
  }

  on_task_submit(id: number): void {
    this.task_finished = true;
    alert(`${this.workitem.task_template.task_id} =?= ${id}`);
  }

  get_TASKTEMPLATES(): void {
    const id = +this._route.snapshot.paramMap.get('id') ;
    this._workitemService.getTaskTemplates(id)
        .subscribe(tasktemplates => this.TASKTEMPLATES = tasktemplates);
  }
  
  get_VERSIONS(): void {
    this._versionService.getObjects()
        .subscribe(versions => this.VERSIONS = versions);
  }
  get_PRODUCTS(): void {
    this._productService.getObjects()
        .subscribe(products => this.PRODUCTS = products);
  }
  syncObject(): void {
    this._workitemService.syncObject(this.workitem.id)
        .subscribe(workitem => { 
          this.workitem = workitem;
        });
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
