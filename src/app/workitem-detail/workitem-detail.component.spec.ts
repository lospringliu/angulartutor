import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkitemDetailComponent } from './workitem-detail.component';

describe('WorkitemDetailComponent', () => {
  let component: WorkitemDetailComponent;
  let fixture: ComponentFixture<WorkitemDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WorkitemDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WorkitemDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
