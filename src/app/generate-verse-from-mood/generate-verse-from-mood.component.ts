import {
  ChangeDetectionStrategy,
  Component,
  inject,
  signal,
} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { environment } from '../../environments/environment';

interface BibleVerseResponse {
  verse: string;
}

@Component({
  selector: 'app-generate-verse-from-mood',
  imports: [FormsModule, MatButtonModule, MatFormFieldModule, MatInputModule],
  templateUrl: './generate-verse-from-mood.component.html',
  styleUrl: './generate-verse-from-mood.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class GenerateVerseFromMoodComponent {
  private readonly http = inject(HttpClient);

  readonly moods = ['開心', '難過', '焦慮', '感恩', '疲憊'];
  readonly mood = signal('');
  readonly bibleVerse = signal('');
  readonly isLoading = signal(false);
  readonly error = signal(false);

  chooseMood(mood: string): void {
    this.mood.set(mood);
  }

  submit(): void {
    const mood = this.mood().trim();
    if (!mood || this.isLoading()) {
      return;
    }

    this.isLoading.set(true);
    this.error.set(false);
    this.http
      .post<BibleVerseResponse>(
        `${environment.apiUrl}/get-bible-verse-from-mood`,
        { mood },
      )
      .subscribe({
        next: (res) => {
          this.bibleVerse.set(res.verse);
          this.isLoading.set(false);
        },
        error: () => {
          this.error.set(true);
          this.isLoading.set(false);
        },
      });
  }
}
