import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Session2practicaComponent } from './session2practica.component';

describe('Session2practicaComponent', () => {
  let component: Session2practicaComponent;
  let fixture: ComponentFixture<Session2practicaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Session2practicaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Session2practicaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
