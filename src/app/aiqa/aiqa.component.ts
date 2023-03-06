import { Component, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AppConfig, APP_CONFIG } from '../app.config';

interface Completion {
  choices: {
    text: string;
    index: number;
    logprobs: any;
    finish_reason: string;
  }[];
}

@Component({
  selector: 'app-aiqa',
  templateUrl: './aiqa.component.html',
  styleUrls: ['./aiqa.component.scss'],
})
export class AiqaComponent {
  mood: string = '';
  bibleVerse: string = '';

  constructor(
    @Inject(APP_CONFIG) private appConfig: AppConfig,
    private http: HttpClient
  ) {}

  chooseMood(mood: string) {
    this.mood = mood;
  }

  async submit() {
    const prompt = `今天我的心情是 ${this.mood}，可以幫我找一個聖經經文給我嗎？請務必確保聖經經文是正確的。\n`;
    const res = await this.createCompletion(prompt);

    if (res && res.choices && res.choices.length > 0) {
      const bibleVerse = res.choices[0].text;
      this.bibleVerse = bibleVerse;
    }
  }

  private async createCompletion(prompt: string) {
    const endpoint = `https://api.openai.com/v1/completions`;
    const token = this.appConfig.openApiKey;
    const body = {
      model: 'text-davinci-003',
      prompt: prompt,
      max_tokens: 700,
      temperature: 0.7,
      stream: false,
    };

    return this.http
      .post<Completion>(endpoint, body, {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
      })
      .toPromise();
  }
}
