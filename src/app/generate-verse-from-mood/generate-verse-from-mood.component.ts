import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

interface BibleVerseResponse {
  verse: string;
}

@Component({
  selector: 'app-generate-verse-from-mood',
  templateUrl: './generate-verse-from-mood.component.html',
  styleUrls: ['./generate-verse-from-mood.component.scss'],
})
export class GenerateVerseFromMoodComponent {
  isLoading = false;

  mood: string = '';
  bibleVerse: string = '';

  constructor(private http: HttpClient) {}

  chooseMood(mood: string) {
    this.mood = mood;
  }

  async submit() {
    this.isLoading = true;

    const res = await this.createCompletion(this.mood);
    if (res && res.verse) {
      this.bibleVerse = res.verse;
    }

    this.isLoading = false;
  }

  private async createCompletion(mood: string) {
    const endpoint = `${environment.apiUrl}/get-bible-verse-from-mood`;
    const body = { mood: mood };
    return this.http.post<BibleVerseResponse>(endpoint, body).toPromise();
  }
}
