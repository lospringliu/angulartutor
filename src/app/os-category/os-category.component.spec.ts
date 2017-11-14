import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OsCategoryComponent } from './os-category.component';

describe('OsCategoryComponent', () => {
  let component: OsCategoryComponent;
  let fixture: ComponentFixture<OsCategoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OsCategoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OsCategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
