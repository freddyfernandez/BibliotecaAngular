import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Session10Component } from './session10.component';

describe('Session10Component', () => {
  let component: Session10Component;
  let fixture: ComponentFixture<Session10Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Session10Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Session10Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
