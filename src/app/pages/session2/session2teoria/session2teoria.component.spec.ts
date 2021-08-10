import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Session2teoriaComponent } from './session2teoria.component';

describe('Session2teoriaComponent', () => {
  let component: Session2teoriaComponent;
  let fixture: ComponentFixture<Session2teoriaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Session2teoriaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Session2teoriaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
