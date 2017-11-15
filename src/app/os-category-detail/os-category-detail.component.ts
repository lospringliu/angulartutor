import { Component, OnInit, ViewEncapsulation, Input } from '@angular/core';
import { OsCategory } from '../build.class';

@Component({
  selector: 'app-os-category-detail',
  templateUrl: './os-category-detail.component.html',
  styleUrls: ['./os-category-detail.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class OsCategoryDetailComponent implements OnInit {

  @Input() oscategory: OsCategory;
  
  constructor() { }

  ngOnInit() {
  }

}
