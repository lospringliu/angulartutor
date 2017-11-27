import { Component, OnInit, ViewEncapsulation } from '@angular/core';

import { Task, TaskProject, Status } from '../build.class';
import { TaskService } from '../task.service';
//import { TaskProjectService } from '../task-project.service';
import { StatusService } from '../status.service';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css'],
  encapsulation: ViewEncapsulation.None
})

export class TaskListComponent implements OnInit {

  tasks: Task[];
  STATUSES: Status[];
  TASKPROJECTS: TaskProject[];
  //constructor(private _oscategoryService: OsCategoryService) { }
  constructor(private _taskService: TaskService, private _statusService: StatusService) { }
  
  ngOnInit() { 
    this.getObjects(); 
  }

  get_STATUSES():void {
    this._statusService.getStatuses()
        .subscribe(statuses => this.STATUSES = statuses);
  }
  
  getObjects() {
    this._taskService.getObjects()
    //this._service.getObjects(OsCategory)
        .subscribe(tasks => this.tasks = tasks);
  }

  delete(task: Task): void {
    this.tasks = this.tasks.filter(t => t !== task);
    this._taskService.deleteObject(task).subscribe();
  }

}
