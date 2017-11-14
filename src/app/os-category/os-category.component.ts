import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { OsCategory } from '../build.class';

@Component({
  selector: 'app-os-category',
  templateUrl: './os-category.component.html',
  styleUrls: ['./os-category.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class OsCategoryComponent implements OnInit {
  oscategory: OsCategory = {
    category_id: 1,
    category_name: 'Linux'
  }

  constructor() { }

  ngOnInit() { }

}
