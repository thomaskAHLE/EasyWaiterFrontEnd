import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AssignTablesComponent } from './assign-tables.component';

describe('AssignTablesComponent', () => {
  let component: AssignTablesComponent;
  let fixture: ComponentFixture<AssignTablesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AssignTablesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AssignTablesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
