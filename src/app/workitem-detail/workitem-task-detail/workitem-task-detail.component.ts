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
    let task_name: string = this.task.task_name;
    task_name = task_name.replace(/\.weekly/i,'').replace(/\.ifix/i,'').replace(/_gp/i,'');
    if ( task_name === 'cws2.2' ) {
      task_name = 'sym7.1.1';
    } 
    this.taskfile = '';
    this.taskfile += `[task]     \t${this.task.task_name}\n`;
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
    this.taskfile += `[release] \t${this.workitem.reldir || "/pcc/hq-china/hi-priority/patch/attention"}\n`;
    this.taskfile += `[keepdays] \t${this.task.keep_days || 3}\n`;
    this.taskfile += `\n[begin]   \t${this.task.checkout === "Y" ? 'checkout' : 'none'}\n`;
    this.taskfile += `[cpcvs]   \t${this.cpcvs ? "yes" : "none" }\n`;
    this.taskfile += `[strip]   \t${this.task.strip === 'Y' ? 'strip' : 'none'}\n`;
    this.taskfile += `[end]     \tnone\n`;
    this.taskfile += `[clean]     \tnone\n`;
    this.taskfile += `[report]  \t${this.task.auto_report === 'Y' ? 'yes' : 'none'}\n`;
    //this.taskfile += `[clean]     \t${this.task.auto_clean === 'Y' ? 'yes' : 'none'}\n`;
    if (this.task.mailto){
        this.taskfile += `[mailto] \t${this.task.mailto}\n`;
    }
    this.taskfile += `[backup]  \tmonthday\n\n`
    
    this.task.env.trim().split('\n').map(line => line.trim()).filter(line => line !== '')
      //.filter(line => line[0] !== '#')
      .map(line => {  let z = line[0] === '#' ? '#' : '' ;
                      line = line.replace(/^#+/,'');
                      line = line.replace(/buildno=.*/,`buildno=${this.workitem.wi_id}`);
                      line = line.replace(/ftpdirw=.*/,`ftpdirw=U:\\\\\\\\\\\\\\\\pcc\\\\\\\\\\\\\\\\saqa\\\\\\\\\\\\\\\\ftpdir\\\\\\\\\\\\\\\\${task_name}`);
                      line = line.replace(/ftpdir=.*/,`ftpdir=/pcc/saqa/ftpdir/${task_name}`);
                      line = line.replace(/layout=.*/,`layout=/pcc/saqa/ftpdir/${task_name}/layout`);
                      //clean_dir
                      line = line.replace(/filelist=.*/,`filelist=\$work/filelist/${this.workitem.wi_id}`);
                      if ( task_name === "sym6.1.1" ) {
                        line = line.replace(/major_version=.*/,`major_version=6.1`);
                        if (/minor_version/.test(line)) {
                          line = line.replace(/0/,`1`);
                        }
                      }
                      //win_version_number or hard_depend
                      if ( /WIN_VERSION_NUMBER/i.test(line) || /hard_depend/i.test(line) ) {
                        z = '#' ;
                      }
                      //packagetype
                      if (/PACKAGETYPE=/.test(line)) {
                        line = line.replace(/EP/,'Fix');
                      }
                      //hotfix
                      if ( /HOTFIX=/.test(line) && /lsf/i.test(task_name) && this.workitem.apar !== '') {
                        z = '';
                        line = line.replace(/HOT_FIX=\\"\\"/,`HOT_FIX=\\"${this.workitem.apar}\\"`);
                      }
                      //lsf_product_build or java_x86_sol10
                      if (/LSF_PROUDCT_BUILD=/.test(line) || /JAVA_X86_SOL10=/.test(line) ) {
                        line = `IS2010BUILD_ROOT="C:/Program Files/InstallShield/2010 StandaloneBuild/System"`
                      }
                      //task_name === pm7.1.sas
                      if (line[0] === '.') {
                        return `${z}[env]  \t${line.substring(1)}`;
                      } else {
                        let parts = /^(.*?)=(.*)$/.exec(line);
                        if (parts === null) {
                          return `${z}${line}`;
                        }else if (parts[1][0] === '_') {
                          
                          return `${z}[${parts[1].substring(1)}]    \t${parts[2]}`; 
                        } else {
                          return `${z}[~${parts[1]}]    \t${parts[2]}`;
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
        this.taskfile += `\t${tpo.os.os_name}\t#${tpo.project_os.step.step_name}\n`;
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
  toogle_oses_selected() {
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
    this.task_id = this.workitem.task_template.task_id;
    this.getObject();
    this.get_STATUSES();  
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
          task.reldir = this.workitem.reldir;

          if (this.workitem.product.default_components) {
            task.taskprojects.forEach(
              tp => {
                if ( this.workitem.product.default_components.split(/\s*,\s*/).indexOf(tp.component.component_name) > -1 ) {
                  tp.enable = 'Y';
                } else {
                  tp.enable = 'N';
                }
              }
            );
          }
          if (this.workitem.platforms.length > 0) {
            task.taskprojectoses.forEach(
              tpo => {
                let tp = task.taskprojects.filter( tp => tp.component.component_id === tpo.component.component_id )[0];
                if (tp !== undefined && tp !== null) {
                  if (tp.enable === 'Y') {
                    if ( this.workitem.platforms.map(p => p.name).indexOf(tpo.os.os_name) > -1 ) {
                      tpo.enable = 'Y';
                    } else {
                      tpo.enable = 'N';
                    }
                  }
                }
              }
            );
          } else {
            // try to exclude some obvious os
            task.taskprojectoses.forEach(
              tpo => {
                let tp = task.taskprojects.filter( tp => tp.component.component_id === tpo.component.component_id )[0];
                if (tp !== undefined && tp !== null) {
                  if ( tp.enable === 'Y' ) {
                    if ( !/Win/i.test(this.workitem.platforms_string) ) {
                      if ( /win/i.test(tpo.os.category.category_name) ) {
                        tpo.enable = 'N';
                      }
                    }
                    if ( !/ppc/i.test(this.workitem.platforms_string) ) {
                      if ( /ppc/i.test(tpo.os.os_name) ) {
                        tpo.enable = 'N';
                      }
                    }
                    if ( !/Aix/i.test(this.workitem.platforms_string) ) {
                      if ( /aix/i.test(tpo.os.category.category_name) ) {
                        tpo.enable = 'N';
                      }
                    }
                    if ( !/Solaris/i.test(this.workitem.platforms_string) ) {
                      if ( /solaris/i.test(tpo.os.category.category_name) ) {
                        tpo.enable = 'N';
                      }
                    }
                  }
                }
              }
            )
          }
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
