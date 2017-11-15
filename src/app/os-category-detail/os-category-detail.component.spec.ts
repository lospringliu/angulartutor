import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OsCategoryDetailComponent } from './os-category-detail.component';

describe('OsCategoryDetailComponent', () => {
  let component: OsCategoryDetailComponent;
  let fixture: ComponentFixture<OsCategoryDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OsCategoryDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OsCategoryDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
