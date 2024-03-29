import { TestBed, inject } from '@angular/core/testing';
import { RouterTestingModule } from "@angular/router/testing";
import { AuthService } from './auth.service';

describe('AuthService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
      RouterTestingModule.withRoutes([]),
    ],
      providers: [AuthService]
    });
  });

  it('should be created', inject([AuthService], (service: AuthService) => {
    expect(service).toBeTruthy();
  }));
});
