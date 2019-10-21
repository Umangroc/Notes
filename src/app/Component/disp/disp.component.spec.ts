import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { MaterialModule } from 'src/app/material';
import { HttpClientTestingModule} from '@angular/common/http/testing';
import { DispComponent } from './disp.component';

describe('DispComponent', () => {
  let component: DispComponent;
  let fixture: ComponentFixture<DispComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DispComponent ],
      imports: [MaterialModule, HttpClientTestingModule],
      schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DispComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
