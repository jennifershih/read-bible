import { Component } from '@angular/core';

interface Book {
  value: string;
  viewValue: string;
}

interface Chapter {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
})
export class SearchComponent {
  books: Book[] = [
    { value: 'book1', viewValue: '創世紀' },
    { value: 'book2', viewValue: '出埃及記' },
    { value: 'book3', viewValue: '利未記' },
    { value: 'book4', viewValue: '民數記' },
    { value: 'book5', viewValue: '申命記' },
    { value: 'book6', viewValue: '約書亞記' },
    { value: 'book7', viewValue: '士師記' },
    { value: 'book8', viewValue: '路得記' },
    { value: 'book9', viewValue: '撒母耳記上' },
    { value: 'book10', viewValue: '撒母耳記下' },
    { value: 'book11', viewValue: '列王紀上' },
    { value: 'book12', viewValue: '列王紀下' },
    { value: 'book13', viewValue: '歷代志上' },
    { value: 'book14', viewValue: '歷代志下' },
    { value: 'book15', viewValue: '以斯拉記' },
    { value: 'book16', viewValue: '尼希米記' },
    { value: 'book17', viewValue: '以斯帖記' },
    { value: 'book18', viewValue: '約伯記' },
    { value: 'book19', viewValue: '詩篇' },
    { value: 'book20', viewValue: '箴言' },
    { value: 'book21', viewValue: '傳道書' },
    { value: 'book22', viewValue: '雅歌書' },
    { value: 'book23', viewValue: '以賽亞書' },
    { value: 'book24', viewValue: '耶利米書' },
    { value: 'book25', viewValue: '耶利米哀歌' },
    { value: 'book26', viewValue: '以西結書' },
    { value: 'book27', viewValue: '但以理書' },
    { value: 'book28', viewValue: '何西阿書' },
    { value: 'book29', viewValue: '約珥書' },
    { value: 'book30', viewValue: '阿摩司書' },
    { value: 'book31', viewValue: '俄巴底亞書' },
    { value: 'book32', viewValue: '約拿書' },
    { value: 'book33', viewValue: '彌迦書' },
    { value: 'book34', viewValue: '那鴻書' },
    { value: 'book35', viewValue: '哈巴谷書' },
    { value: 'book36', viewValue: '西番雅書' },
    { value: 'book37', viewValue: '哈該書' },
    { value: 'book38', viewValue: '撒迦利亞書' },
    { value: 'book39', viewValue: '瑪拉基書' },
    { value: 'book40', viewValue: '馬太福音' },
    { value: 'book41', viewValue: '馬可福音' },
    { value: 'book42', viewValue: '路加福音' },
    { value: 'book43', viewValue: '約翰福音' },
    { value: 'book44', viewValue: '使徒行傳' },
    { value: 'book45', viewValue: '羅馬書' },
    { value: 'book46', viewValue: '哥林多前書' },
    { value: 'book47', viewValue: '哥林多後書' },
    { value: 'book48', viewValue: '加拉太書' },
    { value: 'book49', viewValue: '以弗所書' },
    { value: 'book50', viewValue: '腓立比書' },
    { value: 'book51', viewValue: '歌羅西書' },
    { value: 'book52', viewValue: '帖撒羅尼迦前書' },
    { value: 'book53', viewValue: '帖撒羅尼迦後書' },
    { value: 'book54', viewValue: '提摩太前書' },
    { value: 'book55', viewValue: '提摩太後書' },
    { value: 'book56', viewValue: '提多書' },
    { value: 'book57', viewValue: '腓利門書' },
    { value: 'book58', viewValue: '希伯來書' },
    { value: 'book59', viewValue: '雅各書' },
    { value: 'book60', viewValue: '彼得前書' },
    { value: 'book61', viewValue: '彼得後書' },
    { value: 'book62', viewValue: '約翰一書' },
    { value: 'book63', viewValue: '約翰二書' },
    { value: 'book64', viewValue: '約翰三書' },
    { value: 'book65', viewValue: '猶大書' },
    { value: 'book66', viewValue: '啟示錄' },
  ];

  chapters: Chapter[] = [{ value: 'chapter1', viewValue: '1' }];
}
