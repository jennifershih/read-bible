import { TestBed } from '@angular/core/testing';
import { provideHttpClient } from '@angular/common/http';
import {
  HttpTestingController,
  provideHttpClientTesting,
} from '@angular/common/http/testing';
import { provideNoopAnimations } from '@angular/platform-browser/animations';
import { SearchVerseComponent } from './search-verse.component';
import { BIBLE_BOOKS } from './bible-books';

describe('SearchVerseComponent', () => {
  let component: SearchVerseComponent;
  let http: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [SearchVerseComponent],
      providers: [
        provideHttpClient(),
        provideHttpClientTesting(),
        provideNoopAnimations(),
      ],
    });
    component = TestBed.createComponent(SearchVerseComponent).componentInstance;
    http = TestBed.inject(HttpTestingController);
  });

  afterEach(() => http.verify());

  it('lists all 66 books', () => {
    expect(BIBLE_BOOKS).toHaveLength(66);
  });

  it('builds the chapter list for the selected book', () => {
    expect(component.chapters()).toEqual([]);
    component.selectBook(BIBLE_BOOKS.find((b) => b.id === 'RUT')!);
    expect(component.chapters()).toEqual([1, 2, 3, 4]);
  });

  it('loads the chapter in the Chinese Union Version', () => {
    component.selectBook(BIBLE_BOOKS.find((b) => b.id === 'JHN')!);
    component.selectChapter(3);

    const req = http.expectOne('https://bible-api.com/data/cuv/JHN/3');
    req.flush({ verses: [{ verse: 16, text: '神愛世人\n' }] });

    expect(component.verses()).toEqual([{ verse: 16, text: '神愛世人' }]);
    expect(component.loading()).toBe(false);
  });

  it('clears the chapter when another book is picked', () => {
    component.selectBook(BIBLE_BOOKS[0]);
    component.chapter.set(2);
    component.selectBook(BIBLE_BOOKS[1]);
    expect(component.chapter()).toBeNull();
  });
});
