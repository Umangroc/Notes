import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { MaterialModule } from 'src/app/material';
import { HttpClientTestingModule} from '@angular/common/http/testing';
import { ImagedialogComponent } from './imagedialog.component';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'; 

describe('ImagedialogComponent', () => {
  let component: ImagedialogComponent;
  let fixture: ComponentFixture<ImagedialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ImagedialogComponent ],
      schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
      imports: [MaterialModule, HttpClientTestingModule, BrowserAnimationsModule],
      providers: [
        { provide: MAT_DIALOG_DATA, useValue: {} },
        { provide: MatDialogRef, useValue: {} }
    ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ImagedialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
