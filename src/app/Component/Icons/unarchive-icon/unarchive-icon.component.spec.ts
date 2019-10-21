import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { MaterialModule } from 'src/app/material';
import { HttpClientTestingModule} from '@angular/common/http/testing';
import { UnarchiveIconComponent } from './unarchive-icon.component';

describe('UnarchiveIconComponent', () => {
  let component: UnarchiveIconComponent;
  let fixture: ComponentFixture<UnarchiveIconComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UnarchiveIconComponent ],
      imports: [MaterialModule, HttpClientTestingModule],
      schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UnarchiveIconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
