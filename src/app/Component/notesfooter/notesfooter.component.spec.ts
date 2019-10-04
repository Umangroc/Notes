import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NotesfooterComponent } from './notesfooter.component';

describe('NotesfooterComponent', () => {
  let component: NotesfooterComponent;
  let fixture: ComponentFixture<NotesfooterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NotesfooterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NotesfooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
