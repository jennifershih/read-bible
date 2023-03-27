import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { GenerateVerseFromMoodComponent } from './generate-verse-from-mood.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatInputModule } from '@angular/material/input';

describe('GenerateVerseFromMoodComponent', () => {
  let component: GenerateVerseFromMoodComponent;
  let fixture: ComponentFixture<GenerateVerseFromMoodComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [GenerateVerseFromMoodComponent],
      imports: [
        BrowserAnimationsModule,
        HttpClientTestingModule,
        MatFormFieldModule,
        MatInputModule,
        FormsModule,
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(GenerateVerseFromMoodComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
