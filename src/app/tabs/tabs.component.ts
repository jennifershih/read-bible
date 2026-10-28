import { ChangeDetectionStrategy, Component } from '@angular/core';
import { MatTabsModule } from '@angular/material/tabs';
import { SearchVerseComponent } from '../search-verse/search-verse.component';
import { GenerateVerseFromMoodComponent } from '../generate-verse-from-mood/generate-verse-from-mood.component';

@Component({
  selector: 'app-tabs',
  imports: [
    MatTabsModule,
    SearchVerseComponent,
    GenerateVerseFromMoodComponent,
  ],
  templateUrl: './tabs.component.html',
  styleUrl: './tabs.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TabsComponent {}
