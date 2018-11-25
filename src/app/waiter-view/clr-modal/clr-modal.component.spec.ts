import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClrModalComponent } from './clr-modal.component';

describe('ClrModalComponent', () => {
  let component: ClrModalComponent;
  let fixture: ComponentFixture<ClrModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClrModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClrModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
