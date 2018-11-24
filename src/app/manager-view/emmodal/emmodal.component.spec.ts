import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EMmodalComponent } from './emmodal.component';

describe('EMmodalComponent', () => {
  let component: EMmodalComponent;
  let fixture: ComponentFixture<EMmodalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EMmodalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EMmodalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
