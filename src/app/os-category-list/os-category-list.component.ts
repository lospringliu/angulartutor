import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { OsCategory } from '../build.class';
import { OsCategoryService } from '../os-category.service';
// import { ProductBuildService } from '../product-build.service';
// import { OSCATEGORIES } from '../mock';

@Component({
  selector: 'app-os-category',
  templateUrl: './os-category-list.component.html',
  styleUrls: ['./os-category-list.component.css'],
  encapsulation: ViewEncapsulation.None
})

export class OsCategoryListComponent implements OnInit {

  oscategories: OsCategory[];

  constructor(private _oscategoryService: OsCategoryService) { }

  ngOnInit() { this.getOsCategories(); }

  getOsCategories() {
    this._oscategoryService.getOsCategories()
    //this._service.getObjects(OsCategory)
        .subscribe(oscategories => this.oscategories = oscategories);
  }

  add(name: string): void {
    name = name.trim();
    if (!name) { return; }
    this._oscategoryService.addOsCategory( { category_name: name } as OsCategory)
        .subscribe(
          oscategory => { this.oscategories.push(oscategory); }
        );
  }

  delete(oscategory: OsCategory): void {
    this.oscategories = this.oscategories.filter(h => h !== oscategory);
    this._oscategoryService.deleteOsCategory(oscategory).subscribe();
  }

}
