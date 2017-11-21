import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Os } from '../build.class';
import { OsService } from '../os.service';
import { ProductBuildService } from '../product-build.service';
// import { OSCATEGORIES } from '../mock';

@Component({
  selector: 'app-os-list',
  templateUrl: './os-list.component.html',
  styleUrls: ['./os-list.component.css'],
  encapsulation: ViewEncapsulation.None
})

export class OsListComponent implements OnInit {

  oses: Os[];

  //constructor(private _oscategoryService: OsCategoryService) { }
  constructor(private _service: ProductBuildService, private _osService: OsService) { }
  ngOnInit() { this.getObjects(); }

  getObjects() {
    this._osService.getObjects()
    //this._service.getObjects(OsCategory)
        .subscribe(oses => this.oses = oses);
  }

  add(name: string): void {
    name = name.trim();
    if (!name) { return; }
    this._osService.addObject( { os_name: name } as Os)
        .subscribe(
          os => { this.oses.push(os); }
        );
  }

  delete(os: Os): void {
    this.oses = this.oses.filter(h => h !== os);
    this._osService.deleteObject(os).subscribe();
  }

}
