import { Component, OnInit, ViewEncapsulation, Input, AfterViewInit, ViewChild, EventEmitter, Output } from '@angular/core';
import { Status, Task, TaskProject, TaskProjectOs, Component as BuildComponent, Os } from '../../build.class';
import { Workitem } from '../../patch.class';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { TaskService } from '../../task.service';
import { StatusService } from '../../status.service';

@Component({
  selector: 'workitem-task-detail',
  templateUrl: './task-detail.component.html',
  styleUrls: ['./task-detail.component.css'],
  encapsulation: ViewEncapsulation.None
})

export class WorkitemTaskDetailComponent implements OnInit, AfterViewInit {
  @Input() workitem: Workitem;
  @Output() onTaskFile = new EventEmitter<string>();
  taskfile: string = '';

  send_task_file() {
    this.onTaskFile.emit(this.taskfile);
  }

  @ViewChild(WorkitemTaskDetailComponent)
  private _taskDetailComponent: WorkitemTaskDetailComponent;

  task_id: number;
  task: Task;
  status: Status;
  taskproject: TaskProject;
  components_selected = false;
  oses_selected = false;
  
  STATUSES: Status[];
  TASKPROJECTS: TaskProject[];
  TASKPROJECTOSES: TaskProjectOs[];
  COMPONENTS: BuildComponent[];
  OSES: any[];
  
  constructor(private _route: ActivatedRoute, private _location: Location, private _taskService: TaskService, private  _statusService: StatusService) { }

  generate_task_file(): void {
    this.taskfile = "generated new task file";
  }

  ngAfterViewInit() {
    alert("after view init");
  }
  exists_taskproject_os(os_name: string, taskproject: TaskProject) {
    //return Math.random() > 0.5;
    return this.TASKPROJECTOSES.filter(tpo => tpo.os.os_name === os_name && tpo.component.component_id === taskproject.component.component_id).length > 0;
  }

  checked_taskproject_os(os_name: string, taskproject: TaskProject) {
    return this.TASKPROJECTOSES.filter(tpo => tpo.os.os_name === os_name && tpo.component.component_id === taskproject.component.component_id)[0].enable == 'Y';
  }

  toggle_taskproject_os_selected(os_name: string, taskproject: TaskProject) {
    for (var tpo of this.TASKPROJECTOSES) { 
      if (tpo.os.os_name === os_name && tpo.component.component_id === taskproject.component.component_id){
        if (tpo.enable == 'Y') {
          tpo.enable = 'N';
        } else {
          tpo.enable = 'Y';
        }    
      }
    };
  }
  
  toggle_select_components(word: string) {
    if (word === 'all') {
      this.task.taskprojects.map(tp => tp.enable = 'Y');
    } else if (word === 'none') {
      this.task.taskprojects.map(tp => tp.enable = 'N');
    }else {
      this.task.taskprojects.map(tp => {
        if (tp.enable === 'Y') {
          tp.enable = 'N';
        } 
        else {
          tp.enable = 'Y';
        }
      });
    }
  }

  toggle_components_selected() {
    this.components_selected = !this.components_selected;
    this.oses_selected = false;
  }

  show_components_select() {
    return ! this.components_selected;
  }

  show_oses_select() {
    return ! this.oses_selected && this.components_selected ;
  }

  on_components_select() {
    this.TASKPROJECTS = this.task.taskprojects.filter(comp => comp.enable === "Y");
    this.TASKPROJECTOSES = this.task.taskprojectoses;
    this.COMPONENTS = this.TASKPROJECTS.map(tp => tp.component);
    
    //for ( var comp of components_not_selected ) {   
    for ( var comp of this.task.taskprojects.filter(comp => comp.enable === 'N').map(tp => tp.component)) {
      this.TASKPROJECTOSES = this.TASKPROJECTOSES.filter( (tpo) => tpo.component.component_id !== comp.component_id );
    }
    this.OSES = this.TASKPROJECTOSES.map(tpo => tpo.os.os_name);
    this.OSES = this.OSES.filter((e,i,s) => s.indexOf(e) === i);
    this.OSES.sort((x,y) => {
      if (x > y) {
        return 1;
      } else if (x < y) {
        return -1;
      }
      else {
        return 0;
      }
    });
    this.components_selected = true;
  }

  toggle_enable_taskproject(obj: TaskProject): void {
    if ( obj.enable === 'Y' ) {
      obj.enable = "N"
    }
    else {
      obj.enable = "Y"
    }
  }
  
  ngOnInit() {
    this.task_id = this.workitem.task_template;
    this.get_STATUSES();
    this.getObject();
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
