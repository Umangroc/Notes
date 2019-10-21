import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { MaterialModule } from 'src/app/material';
import { HttpClientTestingModule} from '@angular/common/http/testing';
import { LabeldialogComponent } from './labeldialog.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'; 
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';

describe('LabeldialogComponent', () => {
  let component: LabeldialogComponent;
  let fixture: ComponentFixture<LabeldialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LabeldialogComponent ],
      schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
      imports: [MaterialModule, HttpClientTestingModule, FormsModule, ReactiveFormsModule, BrowserAnimationsModule],
      providers: [
        { provide: MAT_DIALOG_DATA, useValue: {} },
        { provide: MatDialogRef, useValue: {} }
    ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LabeldialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
