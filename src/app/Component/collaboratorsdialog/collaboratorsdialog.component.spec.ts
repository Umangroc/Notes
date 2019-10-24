import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CollaboratorsdialogComponent } from './collaboratorsdialog.component';

describe('CollaboratorsdialogComponent', () => {
  let component: CollaboratorsdialogComponent;
  let fixture: ComponentFixture<CollaboratorsdialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CollaboratorsdialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CollaboratorsdialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
