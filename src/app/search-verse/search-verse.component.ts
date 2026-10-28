import {
  ChangeDetectionStrategy,
  Component,
  computed,
  inject,
  signal,
} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { environment } from '../../environments/environment';
import { BIBLE_BOOKS, BibleBook } from './bible-books';

interface Verse {
  verse: number;
  text: string;
}

interface ChapterResponse {
  reference: string;
  verses: Verse[];
}

@Component({
  selector: 'app-search-verse',
  imports: [MatFormFieldModule, MatSelectModule, MatProgressBarModule],
  templateUrl: './search-verse.component.html',
  styleUrl: './search-verse.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SearchVerseComponent {
  private readonly http = inject(HttpClient);

  readonly books = BIBLE_BOOKS;
  readonly book = signal<BibleBook | null>(null);
  readonly chapter = signal<number | null>(null);
  readonly verses = signal<Verse[]>([]);
  readonly loading = signal(false);
  readonly error = signal(false);

  /** 1..n chapter numbers for the selected book */
  readonly chapters = computed(() => {
    const book = this.book();
    return book ? Array.from({ length: book.chapters }, (_, i) => i + 1) : [];
  });

  selectBook(book: BibleBook): void {
    this.book.set(book);
    this.chapter.set(null);
    this.verses.set([]);
  }

  selectChapter(chapter: number): void {
    this.chapter.set(chapter);
    this.loadChapter();
  }

  private loadChapter(): void {
    const book = this.book();
    const chapter = this.chapter();
    if (!book || !chapter) {
      return;
    }

    this.loading.set(true);
    this.error.set(false);
    const reference = encodeURIComponent(`${book.id} ${chapter}`);
    const url = `${environment.bibleApiUrl}/${reference}?translation=cuv`;

    this.http.get<ChapterResponse>(url).subscribe({
      next: (res) => {
        this.verses.set(
          res.verses.map((v) => ({ verse: v.verse, text: v.text.trim() })),
        );
        this.loading.set(false);
      },
      error: () => {
        this.verses.set([]);
        this.error.set(true);
        this.loading.set(false);
      },
    });
  }
}
