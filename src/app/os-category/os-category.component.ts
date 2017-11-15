import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { OsCategory } from '../build.class';
import { OsCategoryService } from '../os-category.service';
// import { OSCATEGORIES } from '../mock';

@Component({
  selector: 'app-os-category',
  templateUrl: './os-category.component.html',
  styleUrls: ['./os-category.component.css'],
  encapsulation: ViewEncapsulation.None
})

export class OsCategoryComponent implements OnInit {
  selectedOscategory: OsCategory;

  oscategories: OsCategory[];

  constructor(private _oscategoryService: OsCategoryService) { }

  ngOnInit() { this.getOsCategories(); }

  getOsCategories() {
    this._oscategoryService.getOsCategories()
        .subscribe(oscategories => this.oscategories = oscategories);
  }

  onSelect(oscategory: OsCategory): void {
    this.selectedOscategory = oscategory;
  }

}
