import { TestBed } from '@angular/core/testing';
import { provideHttpClient } from '@angular/common/http';
import {
  HttpTestingController,
  provideHttpClientTesting,
} from '@angular/common/http/testing';
import { provideNoopAnimations } from '@angular/platform-browser/animations';
import { GenerateVerseFromMoodComponent } from './generate-verse-from-mood.component';

describe('GenerateVerseFromMoodComponent', () => {
  let component: GenerateVerseFromMoodComponent;
  let http: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [GenerateVerseFromMoodComponent],
      providers: [
        provideHttpClient(),
        provideHttpClientTesting(),
        provideNoopAnimations(),
      ],
    });
    component = TestBed.createComponent(
      GenerateVerseFromMoodComponent,
    ).componentInstance;
    http = TestBed.inject(HttpTestingController);
  });

  afterEach(() => http.verify());

  it('does not call the API without a mood', () => {
    component.submit();
    http.expectNone(() => true);
  });

  it('posts the chosen mood and shows the verse', () => {
    component.chooseMood('開心');
    component.submit();

    const req = http.expectOne((r) =>
      r.url.endsWith('/get-bible-verse-from-mood'),
    );
    expect(req.request.body).toEqual({ mood: '開心' });
    req.flush({ verse: '腓立比書 4:4 你們要靠主常常喜樂' });

    expect(component.bibleVerse()).toContain('腓立比書');
    expect(component.isLoading()).toBe(false);
  });

  it('shows an error state when the API fails', () => {
    component.chooseMood('難過');
    component.submit();
    http
      .expectOne(() => true)
      .flush('boom', { status: 500, statusText: 'Server Error' });
    expect(component.error()).toBe(true);
  });
});
