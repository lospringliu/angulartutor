import { Component, OnInit, ViewEncapsulation, Input, AfterViewInit, ViewChild, EventEmitter, Output } from '@angular/core';
import { Status, Task, Project, TaskProject, TaskProjectOs, Component as BuildComponent, Os } from '../../build.class';
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
  cpcvs: boolean = true;
  project: Project;

  STATUSES: Status[];
  TASKPROJECTS: TaskProject[];
  TASKPROJECTOSES: TaskProjectOs[];
  COMPONENTS: BuildComponent[];
  OSES: any[];
  
  constructor(private _route: ActivatedRoute, private _location: Location, private _taskService: TaskService, private  _statusService: StatusService) { }

  generate_task_file(): void {
    this.taskfile = '';
    this.taskfile += `[task]     \ttask.${this.task.task_name}\n`;
    this.taskfile += `[comments]     \t${this.workitem.wi_id}\n`;
    this.taskfile += "[editor]   \tbldsrv\n";
    this.taskfile += `[username]   \tengbuild\n`;
    this.taskfile += `\n[config] \tconfig.${this.task.task_name}\n`;
    this.taskfile += `[makefile] \tMakefile.${this.task.task_name}\n`;
    this.taskfile += `\n[branch]  \t${this.task.branch}\n`;
    this.taskfile += `\n[work]    \t${this.task.work}\n`;
    this.taskfile += `[workw]   \t${this.task.workw}\n`;
    this.taskfile += `[log]     \t${this.task.work}/logs\n`;
    this.taskfile += `[logw]    \t${this.task.workw}/logs\n`;
    this.taskfile += `[release] \t${this.task.reldir}\n`;
    this.taskfile += `[keepdays] \t${this.task.keep_days}\n`;
    this.taskfile += `\n[begin]   \t${this.task.checkout === "Y" ? 'checkout' : 'none'}\n`;
    this.taskfile += `[cpcvs]   \t${this.cpcvs ? "yes" : "none" }\n`;
    this.taskfile += `[strip]   \t${this.task.strip === 'Y' ? 'strip' : 'none'}\n`;
    this.taskfile += `[end]     \t${this.task.auto_clean === 'Y' ? 'none' : 'none'}\n`;
    this.taskfile += `[report]  \t${this.task.auto_report === 'Y' ? 'yes' : 'none'}\n`;
    this.taskfile += `[clean]     \t${this.task.auto_clean === 'Y' ? 'yes' : 'none'}\n`;
    if (this.task.mailto){
        this.taskfile += `[mailto] \t${this.task.mailto}\n`;
    }
    this.taskfile += `[backup]  \tmonthday\n\n`
    
    this.task.env.trim().split('\n').map(line => line.trim()).filter(line => line !== '').filter(line => line[0] !== '#')
      .map(line => line.replace(/buildno=.*/,`buildno=${this.workitem.wi_id}`))  
      .map(line => { if (line[0] === '.') {
                        return `[env]  \t${line}`;
                      } else {
                        let parts = /^(.*?)=(.*)$/.exec(line);
                        if (parts[1][0] === '_') {
                          
                          return `[${parts[1].substring(1)}]    \t${parts[2]}`; 
                        } else {
                          return `[~${parts[1]}]    \t${parts[2]}`;
                        } 
                      } 
                    }
                  ).forEach(line =>
                    this.taskfile += `${line}\n`
                  )
    this.taskfile += `\n[project]  \t${this.project.project_name}\n\n`;
    this.TASKPROJECTS.forEach( tp => {
      this.taskfile += `[component]\t${tp.component.component_name}\n[os]\n`;
      for (var tpo of this.TASKPROJECTOSES.filter( tpo => tpo.enable === 'Y' && tpo.component.component_id === tp.component.component_id)) {
        this.taskfile += `\t${tpo.os.os_name}\n`;
      } 
      this.taskfile += "\n";
    });
  }


  ngAfterViewInit() {
    //alert("after view init");
    console.log("after view init");
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

  toggle_task_checkout() {
    if (this.task.checkout === 'Y') {
      this.task.checkout = 'N';
    }else {
      this.task.checkout = 'Y';
    }
  }

  toggle_task_strip() {
    if (this.task.strip === 'Y') {
      this.task.strip = 'N';
    }else {
      this.task.strip = 'Y';
    }
  }

  toggle_task_cpcvs() {
    this.cpcvs = !this.cpcvs;
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
          this.project = this.task.taskprojects[0].project ;
        });
    }
  
  save(): void {
    alert("do not save in this component");
    //this._taskService.updateObject( this.task )
    //   .subscribe(() => alert('task saved!'));
  }
  
  goBack(): void {
    this._location.back();
  }
}
