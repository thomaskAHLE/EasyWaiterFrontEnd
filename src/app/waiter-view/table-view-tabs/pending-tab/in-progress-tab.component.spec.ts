import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PendingTabComponent } from './pending-tab.component';

describe('InProgressTabComponent', () => {
  let component: PendingTabComponent;
  let fixture: ComponentFixture<PendingTabComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PendingTabComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PendingTabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
