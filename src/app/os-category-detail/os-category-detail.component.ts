import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { OsCategory } from '../build.class';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { OsCategoryService } from '../os-category.service';

@Component({
  selector: 'app-os-category-detail',
  templateUrl: './os-category-detail.component.html',
  styleUrls: ['./os-category-detail.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class OsCategoryDetailComponent implements OnInit {

  oscategory: OsCategory;
  
  constructor(private _route: ActivatedRoute, private _location: Location, private _oscategoryService: OsCategoryService) { }

  ngOnInit() {
    this.getOsCategory();
  }

  getOsCategory(): void {
    const id = +this._route.snapshot.paramMap.get('id') ;
    this._oscategoryService.getOsCategory(id)
        .subscribe(oscategory => this.oscategory = oscategory);
  }

  save(): void {
    this._oscategoryService.updateOsCategory(this.oscategory)
        .subscribe(() => this.goBack());
  }

  goBack(): void {
    this._location.back();
  }
}
