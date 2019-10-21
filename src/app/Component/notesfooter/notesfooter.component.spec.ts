import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NotesfooterComponent } from './notesfooter.component';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { MaterialModule } from 'src/app/material';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('NotesfooterComponent', () => {
  let component: NotesfooterComponent;
  let fixture: ComponentFixture<NotesfooterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NotesfooterComponent ],
      schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
      imports: [MaterialModule, HttpClientTestingModule]
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
