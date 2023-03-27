import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatTabsModule } from '@angular/material/tabs';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { GenerateVerseFromMoodStubComponent } from '../generate-verse-from-mood/generate-verse-from-mood.component.stub';
import { SearchVerseStubComponent } from '../search-verse/search-verse.component.stub';

import { TabsComponent } from './tabs.component';

describe('TabsComponent', () => {
  let component: TabsComponent;
  let fixture: ComponentFixture<TabsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        TabsComponent,
        SearchVerseStubComponent,
        GenerateVerseFromMoodStubComponent,
      ],
      imports: [BrowserAnimationsModule, MatTabsModule],
    }).compileComponents();

    fixture = TestBed.createComponent(TabsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
