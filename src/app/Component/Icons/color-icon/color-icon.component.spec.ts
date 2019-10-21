import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { MaterialModule } from 'src/app/material';
import { HttpClientTestingModule} from '@angular/common/http/testing';
import { ColorIconComponent } from './color-icon.component';

describe('ColorIconComponent', () => {
  let component: ColorIconComponent;
  let fixture: ComponentFixture<ColorIconComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ColorIconComponent ],
      imports: [MaterialModule, HttpClientTestingModule],
      schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ColorIconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
