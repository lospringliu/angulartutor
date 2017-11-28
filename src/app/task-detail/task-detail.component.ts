import { Component, OnInit, ViewEncapsulation, Input } from '@angular/core';
import { Status, Task, TaskProject, TaskProjectOs, Component as BuildComponent, Os } from '../build.class';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { TaskService } from '../task.service';
import { StatusService } from '../status.service';

@Component({
  selector: 'app-task-detail',
  templateUrl: './task-detail.component.html',
  styleUrls: ['./task-detail.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class TaskDetailComponent implements OnInit {

  task_id: number;
  task: Task;
  status: Status;
  taskproject: TaskProject;
  components_selected = false;
  os_selected = false;
  
  STATUSES: Status[];
  TASKPROJECTS: TaskProject[];
  TASKPROJECTOSes: TaskProjectOs[];
  components: BuildComponent[];
  oses: Os[];
  
  constructor(private _route: ActivatedRoute, private _location: Location, private _taskService: TaskService, private  _statusService: StatusService) { }
  
  ngOnInit() {
    this.task_id = +this._route.snapshot.paramMap.get('id') ;
    this.get_STATUSES();
    this.getObject();
    }
  
  on_task_submit() {
    this.components_selected = true ;
    this.TASKPROJECTS = this.task.taskproject_set.filter(comp => comp.enable === "Y");
    this.components = this.TASKPROJECTS.map(tp => tp.component);
    this.task.taskprojectos_set.filter((tpo) => tpo.component.component_id in this.components.map(component => component.component_name === "ego"));
  }

  toggle_enable_taskproject(obj: TaskProject): void {
    if ( obj.enable === 'Y' ) {
      obj.enable = "N"
    }
    else {
      obj.enable = "Y"
    }
  }

  get_STATUSES():void {
    this._statusService.getStatuses()
         .subscribe(statuses => this.STATUSES = statuses);
  }
  
  get_Status(id: number): void {
    this.status = this.STATUSES.filter(status => status.status_id === id)[0];
  }
  
  getObject(): void {
    this._taskService.getObject(this.task_id)
        .subscribe(task => {
          //this.get_Status(task.status);
          this.task = task;
        });
    }
  
  save(): void {
    this._taskService.updateObject( this.task )
       .subscribe(() => alert('task saved!'));
  }
  
  goBack(): void {
    this._location.back();
  }
}
