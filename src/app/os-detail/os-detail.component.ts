import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Os } from '../build.class';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { OsService } from '../os.service';

@Component({
  selector: 'app-os-detail',
  templateUrl: './os-detail.component.html',
  styleUrls: ['./os-detail.component.css'],
  encapsulation: ViewEncapsulation.None
})

export class OsDetailComponent implements OnInit {


  os: Os;
  
  constructor(private _route: ActivatedRoute, private _location: Location, private _osService: OsService) { }

  ngOnInit() {
    this.getObject();
  }

  getObject(): void {
    const id = +this._route.snapshot.paramMap.get('id') ;
    this._osService.getObject(id)
        .subscribe(os => this.os = os);
  }

  save(): void {
    this._osService.updateObject(this.os)
        .subscribe(() => this.goBack());
  }

  goBack(): void {
    this._location.back();
  }
}
