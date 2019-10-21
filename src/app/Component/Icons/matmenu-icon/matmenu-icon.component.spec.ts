import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { MatmenuIconComponent } from './matmenu-icon.component';
import { MaterialModule } from 'src/app/material';
import { HttpClientTestingModule} from '@angular/common/http/testing';


describe('MatmenuIconComponent', () => {
  let component: MatmenuIconComponent;
  let fixture: ComponentFixture<MatmenuIconComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [MaterialModule, HttpClientTestingModule],
      declarations: [ MatmenuIconComponent ],
      schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MatmenuIconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
