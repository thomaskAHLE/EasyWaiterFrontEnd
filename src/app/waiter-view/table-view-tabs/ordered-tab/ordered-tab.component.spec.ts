import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderedTabComponent } from './ordered-tab.component';

describe('OrderedTabComponent', () => {
  let component: OrderedTabComponent;
  let fixture: ComponentFixture<OrderedTabComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrderedTabComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrderedTabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
