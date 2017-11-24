import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgbProgressbarLabeledComponent } from './ngb-progressbar-labeled.component';

describe('NgBootrapComponent', () => {
  let component: NgbProgressbarLabeledComponent;
  let fixture: ComponentFixture<NgbProgressbarLabeledComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgbProgressbarLabeledComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgbProgressbarLabeledComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
