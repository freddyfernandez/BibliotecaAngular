import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SessionhijoComponent } from './sessionhijo.component';

describe('SessionhijoComponent', () => {
  let component: SessionhijoComponent;
  let fixture: ComponentFixture<SessionhijoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SessionhijoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SessionhijoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
