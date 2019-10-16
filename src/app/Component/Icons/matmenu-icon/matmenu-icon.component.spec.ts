import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MatmenuIconComponent } from './matmenu-icon.component';

describe('MatmenuIconComponent', () => {
  let component: MatmenuIconComponent;
  let fixture: ComponentFixture<MatmenuIconComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MatmenuIconComponent ]
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
