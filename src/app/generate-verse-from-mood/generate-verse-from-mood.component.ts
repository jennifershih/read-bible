import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

interface BibleVerseResponse {
  verse: string;
}

@Component({
  selector: 'app-generate-verse-from-mood',
  templateUrl: './generate-verse-from-mood.component.html',
  styleUrls: ['./generate-verse-from-mood.component.scss'],
})
export class GenerateVerseFromMoodComponent {
  mood: string = '';
  bibleVerse: string = '';

  constructor(private http: HttpClient) {}

  chooseMood(mood: string) {
    this.mood = mood;
  }

  async submit() {
    const res = await this.createCompletion(this.mood);
    if (res && res.verse) {
      this.bibleVerse = res.verse;
    }
  }
  private async createCompletion(mood: string) {
    const endpoint = `http://localhost:3000/get-bible-verse-from-mood`;
    const body = { mood: mood };
    return this.http.post<BibleVerseResponse>(endpoint, body).toPromise();
  }
}
