import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { OsCategory } from '../build.class';
import { OSCATEGORIES } from '../mock';

@Component({
  selector: 'app-os-category',
  templateUrl: './os-category.component.html',
  styleUrls: ['./os-category.component.css'],
  encapsulation: ViewEncapsulation.None
})

export class OsCategoryComponent implements OnInit {
  selectedOscategory: OsCategory;

  oscategories = OSCATEGORIES;

  constructor() { }

  ngOnInit() { }

  onSelect(oscategory: OsCategory): void {
    this.selectedOscategory = oscategory;
  }

}
