import { TestBed, inject } from '@angular/core/testing';
import { HttpClientTestingModule} from '@angular/common/http/testing';
import { UserserviceService } from './userservice.service';

describe('UserserviceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [UserserviceService],
      imports: [ HttpClientTestingModule]
    });
  });

  it('should be created', inject([UserserviceService], (service: UserserviceService) => {
    expect(service).toBeTruthy();
  }));
});
