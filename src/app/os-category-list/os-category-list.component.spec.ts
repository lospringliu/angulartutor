import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OsCategoryListComponent } from './os-category-list.component';

describe('OsCategoryComponent', () => {
  let component: OsCategoryListComponent;
  let fixture: ComponentFixture<OsCategoryListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OsCategoryListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OsCategoryListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
