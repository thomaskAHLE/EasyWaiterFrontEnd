import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddWaiterComponent } from './add-waiter.component';

describe('AddWaiterComponent', () => {
  let component: AddWaiterComponent;
  let fixture: ComponentFixture<AddWaiterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddWaiterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddWaiterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
