import { TestBed, inject } from '@angular/core/testing';
import { HttpClientTestingModule} from '@angular/common/http/testing';
import { NoteService } from './note.service';

describe('NoteService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [NoteService],
      imports: [ HttpClientTestingModule]
    });
  });

  it('should be created', inject([NoteService], (service: NoteService) => {
    expect(service).toBeTruthy();
  }));
});
