import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

interface BibleBook {
  value: string;
  viewValue: string;
  chapters: number;
}

@Component({
  selector: 'app-search-verse',
  templateUrl: './search-verse.component.html',
  styleUrls: ['./search-verse.component.scss'],
})
export class SearchVerseComponent {
  data: any;

  books: BibleBook[] = [
    { value: 'genesis', viewValue: '創世紀', chapters: 50 },
    { value: 'Exo', viewValue: '出埃及記', chapters: 40 },
    { value: 'Lev', viewValue: '利未記', chapters: 27 },
    { value: 'Num', viewValue: '民數記', chapters: 36 },
    { value: 'Deu', viewValue: '申命記', chapters: 34 },
    { value: 'Jos', viewValue: '約書亞記', chapters: 24 },
    { value: 'Jdg', viewValue: '士師記', chapters: 21 },
    { value: 'Rut', viewValue: '路得記', chapters: 4 },
    { value: '1Sa', viewValue: '撒母耳記上', chapters: 31 },
    { value: '2Sa', viewValue: '撒母耳記下', chapters: 24 },
    { value: '1Ki', viewValue: '列王紀上', chapters: 22 },
    { value: '2Ki', viewValue: '列王紀下', chapters: 25 },
    { value: '1Ch', viewValue: '歷代志上', chapters: 29 },
    { value: '2Ch', viewValue: '歷代志下', chapters: 36 },
    { value: 'Ezr', viewValue: '以斯拉記', chapters: 10 },
    { value: 'Neh', viewValue: '尼希米記', chapters: 13 },
    { value: 'Est', viewValue: '以斯帖記', chapters: 10 },
    { value: 'Job', viewValue: '約伯記', chapters: 42 },
    { value: 'Psa', viewValue: '詩篇', chapters: 150 },
    { value: 'Pro', viewValue: '箴言', chapters: 31 },
    { value: 'Ecc', viewValue: '傳道書', chapters: 12 },
    { value: 'Son', viewValue: '雅歌書', chapters: 8 },
    { value: 'Isa', viewValue: '以賽亞書', chapters: 66 },
    { value: 'Jer', viewValue: '耶利米書', chapters: 52 },
    { value: 'Lam', viewValue: '耶利米哀歌', chapters: 5 },
    { value: 'Eze', viewValue: '以西結書', chapters: 48 },
    { value: 'Dan', viewValue: '但以理書', chapters: 12 },
    { value: 'Hos', viewValue: '何西阿書', chapters: 14 },
    { value: 'Joe', viewValue: '約珥書', chapters: 3 },
    { value: 'Amo', viewValue: '阿摩司書', chapters: 9 },
    { value: 'Oba', viewValue: '俄巴底亞書', chapters: 1 },
    { value: 'Jon', viewValue: '約拿書', chapters: 4 },
    { value: 'Mic', viewValue: '彌迦書', chapters: 7 },
    { value: 'Nah', viewValue: '那鴻書', chapters: 3 },
    { value: 'Hab', viewValue: '哈巴谷書', chapters: 3 },
    { value: 'Zep', viewValue: '西番雅書', chapters: 3 },
    { value: 'Hag', viewValue: '哈該書', chapters: 2 },
    { value: 'Zec', viewValue: '撒迦利亞書', chapters: 14 },
    { value: 'Malachi', viewValue: '瑪拉基書', chapters: 4 },
    { value: 'Matthew', viewValue: '馬太福音', chapters: 28 },
    { value: 'Mark', viewValue: '馬可福音', chapters: 16 },
    { value: 'Luke', viewValue: '路加福音', chapters: 24 },
    { value: 'John', viewValue: '約翰福音', chapters: 21 },
    { value: 'Acts', viewValue: '使徒行傳', chapters: 28 },
    { value: 'Romans', viewValue: '羅馬書', chapters: 16 },
    { value: '1 Corinthians', viewValue: '哥林多前書', chapters: 16 },
    { value: '2 Corinthians', viewValue: '哥林多後書', chapters: 13 },
    { value: 'Galatians', viewValue: '加拉太書', chapters: 6 },
    { value: 'Ephesians', viewValue: '以弗所書', chapters: 6 },
    { value: 'Philippians', viewValue: '腓立比書', chapters: 4 },
    { value: 'Colossians', viewValue: '歌羅西書', chapters: 4 },
    { value: '1 Thessalonians', viewValue: '帖撒羅尼迦前書', chapters: 5 },
    { value: '2 Thessalonians', viewValue: '帖撒羅尼迦後書', chapters: 3 },
    { value: '1 Timothy', viewValue: '提摩太前書', chapters: 6 },
    { value: '2 Timothy', viewValue: '提摩太後書', chapters: 4 },
    { value: 'Titus', viewValue: '提多書', chapters: 3 },
    { value: 'Philemon', viewValue: '腓利門書', chapters: 1 },
    { value: 'Hebrews', viewValue: '希伯來書', chapters: 13 },
    { value: 'James', viewValue: '雅各書', chapters: 5 },
    { value: '1 Peter', viewValue: '彼得前書', chapters: 5 },
    { value: '2 Peter', viewValue: '彼得後書', chapters: 3 },
    { value: '1 John', viewValue: '約翰一書', chapters: 5 },
    { value: '2 John', viewValue: '約翰二書', chapters: 1 },
    { value: '3 John', viewValue: '約翰三書', chapters: 1 },
    { value: 'Jude', viewValue: '猶大書', chapters: 1 },
    { value: 'Revelation', viewValue: '啟示錄', chapters: 22 },
  ];

  searchForm = new FormGroup({
    book: new FormControl(),
    chapter: new FormControl(),
  });

  constructor(private http: HttpClient) {}

  //chapters()方法首先從表單控件中獲取所選書卷的值
  //使用 Array.prototype.find() 方法從 books 中找到對應的書卷對象。
  //使用 Array.from() 方法動態生成一個章節列表，其長度等於所選書卷的 chapters 屬性。
  //最後返回這個章節列表。
  //如果沒有選擇書卷或者選擇的書卷不存在於 books 中，這個方法將返回一個空的數組 []。這可以避免出現運行時錯誤。
  chapters(): number[] {
    const bookValue = this.searchForm.get('book')?.value;
    const book = this.books.find((b) => b.value === bookValue);
    return book ? Array.from({ length: book.chapters }, (_, i) => i + 1) : [];
  }

  loadText(): void {
    const book = this.searchForm.get('book')?.value;
    const chapter = this.searchForm.get('chapter')?.value;
    const url = `https://bible-api.com/${book}+${chapter}`;
    this.http.get(url).subscribe(
      (response) => {
        this.data = response;
        console.log(this.data);
      },
      (error) => {
        console.log(error);
      }
    );
  }
}
