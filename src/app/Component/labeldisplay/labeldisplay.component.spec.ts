import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LabeldisplayComponent } from './labeldisplay.component';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { MaterialModule } from 'src/app/material';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('LabeldisplayComponent', () => {
  let component: LabeldisplayComponent;
  let fixture: ComponentFixture<LabeldisplayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LabeldisplayComponent ],
      imports: [MaterialModule, HttpClientTestingModule],
      schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LabeldisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
