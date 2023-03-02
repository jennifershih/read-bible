import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

interface Book {
  value: string;
  viewValue: string;
  chapters: number;
}

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
})
export class SearchComponent {
  searchForm = new FormGroup({
    book: new FormControl(),
    chapter: new FormControl(),
  });

  books: Book[] = [
    { value: 'book1', viewValue: '創世紀', chapters: 50 },
    { value: 'book2', viewValue: '出埃及記', chapters: 40 },
    { value: 'book3', viewValue: '利未記', chapters: 27 },
    { value: 'book4', viewValue: '民數記', chapters: 36 },
    { value: 'book5', viewValue: '申命記', chapters: 34 },
    { value: 'book6', viewValue: '約書亞記', chapters: 24 },
    { value: 'book7', viewValue: '士師記', chapters: 21 },
    { value: 'book8', viewValue: '路得記', chapters: 4 },
    { value: 'book9', viewValue: '撒母耳記上', chapters: 31 },
    { value: 'book10', viewValue: '撒母耳記下', chapters: 24 },
    { value: 'book11', viewValue: '列王紀上', chapters: 22 },
    { value: 'book12', viewValue: '列王紀下', chapters: 25 },
    { value: 'book13', viewValue: '歷代志上', chapters: 29 },
    { value: 'book14', viewValue: '歷代志下', chapters: 36 },
    { value: 'book15', viewValue: '以斯拉記', chapters: 10 },
    { value: 'book16', viewValue: '尼希米記', chapters: 13 },
    { value: 'book17', viewValue: '以斯帖記', chapters: 10 },
    { value: 'book18', viewValue: '約伯記', chapters: 42 },
    { value: 'book19', viewValue: '詩篇', chapters: 150 },
    { value: 'book20', viewValue: '箴言', chapters: 31 },
    { value: 'book21', viewValue: '傳道書', chapters: 12 },
    { value: 'book22', viewValue: '雅歌書', chapters: 8 },
    { value: 'book23', viewValue: '以賽亞書', chapters: 66 },
    { value: 'book24', viewValue: '耶利米書', chapters: 52 },
    { value: 'book25', viewValue: '耶利米哀歌', chapters: 5 },
    { value: 'book26', viewValue: '以西結書', chapters: 48 },
    { value: 'book27', viewValue: '但以理書', chapters: 12 },
    { value: 'book28', viewValue: '何西阿書', chapters: 14 },
    { value: 'book29', viewValue: '約珥書', chapters: 3 },
    { value: 'book30', viewValue: '阿摩司書', chapters: 9 },
    { value: 'book31', viewValue: '俄巴底亞書', chapters: 1 },
    { value: 'book32', viewValue: '約拿書', chapters: 4 },
    { value: 'book33', viewValue: '彌迦書', chapters: 7 },
    { value: 'book34', viewValue: '那鴻書', chapters: 3 },
    { value: 'book35', viewValue: '哈巴谷書', chapters: 3 },
    { value: 'book36', viewValue: '西番雅書', chapters: 3 },
    { value: 'book37', viewValue: '哈該書', chapters: 2 },
    { value: 'book38', viewValue: '撒迦利亞書', chapters: 14 },
    { value: 'book39', viewValue: '瑪拉基書', chapters: 4 },
    { value: 'book40', viewValue: '馬太福音', chapters: 28 },
    { value: 'book41', viewValue: '馬可福音', chapters: 16 },
    { value: 'book42', viewValue: '路加福音', chapters: 24 },
    { value: 'book43', viewValue: '約翰福音', chapters: 21 },
    { value: 'book44', viewValue: '使徒行傳', chapters: 28 },
    { value: 'book45', viewValue: '羅馬書', chapters: 16 },
    { value: 'book46', viewValue: '哥林多前書', chapters: 16 },
    { value: 'book47', viewValue: '哥林多後書', chapters: 13 },
    { value: 'book48', viewValue: '加拉太書', chapters: 6 },
    { value: 'book49', viewValue: '以弗所書', chapters: 6 },
    { value: 'book50', viewValue: '腓立比書', chapters: 4 },
    { value: 'book51', viewValue: '歌羅西書', chapters: 4 },
    { value: 'book52', viewValue: '帖撒羅尼迦前書', chapters: 5 },
    { value: 'book53', viewValue: '帖撒羅尼迦後書', chapters: 3 },
    { value: 'book54', viewValue: '提摩太前書', chapters: 6 },
    { value: 'book55', viewValue: '提摩太後書', chapters: 4 },
    { value: 'book56', viewValue: '提多書', chapters: 3 },
    { value: 'book57', viewValue: '腓利門書', chapters: 1 },
    { value: 'book58', viewValue: '希伯來書', chapters: 13 },
    { value: 'book59', viewValue: '雅各書', chapters: 5 },
    { value: 'book60', viewValue: '彼得前書', chapters: 5 },
    { value: 'book61', viewValue: '彼得後書', chapters: 3 },
    { value: 'book62', viewValue: '約翰一書', chapters: 5 },
    { value: 'book63', viewValue: '約翰二書', chapters: 1 },
    { value: 'book64', viewValue: '約翰三書', chapters: 1 },
    { value: 'book65', viewValue: '猶大書', chapters: 1 },
    { value: 'book66', viewValue: '啟示錄', chapters: 22 },
  ];

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
}
