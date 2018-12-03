import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RmItemModalComponent } from './rm-item-modal.component';

describe('RmItemModalComponent', () => {
  let component: RmItemModalComponent;
  let fixture: ComponentFixture<RmItemModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RmItemModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RmItemModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
