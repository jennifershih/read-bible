import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GenerateVerseFromMoodComponent } from './generate-verse-from-mood.component';

describe('GenerateVerseFromMoodComponent', () => {
  let component: GenerateVerseFromMoodComponent;
  let fixture: ComponentFixture<GenerateVerseFromMoodComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [GenerateVerseFromMoodComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(GenerateVerseFromMoodComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
