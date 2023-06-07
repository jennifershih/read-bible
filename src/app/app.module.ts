import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { SearchVerseComponent } from './search-verse/search-verse.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { FooterComponent } from './footer/footer.component';
import { MatTabsModule } from '@angular/material/tabs';
import { GenerateVerseFromMoodComponent } from './generate-verse-from-mood/generate-verse-from-mood.component';
import { TabsComponent } from './tabs/tabs.component';
import {
  SocialAuthServiceConfig,
  SocialLoginModule,
  GoogleLoginProvider,
} from '@abacritt/angularx-social-login';
import { LoginComponent } from './login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SearchVerseComponent,
    FooterComponent,
    GenerateVerseFromMoodComponent,
    TabsComponent,
    LoginComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    MatToolbarModule,
    MatFormFieldModule,
    MatSelectModule,
    MatInputModule,
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatTabsModule,
    SocialLoginModule,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  providers: [
    {
      provide: 'SocialAuthServiceConfig',
      useFactory: () => {
        const clientId =
          '296361301198-8pshrus8f8j51b0g3n5dublb3sq5u05k.apps.googleusercontent.com';
        const socialAuthServiceConfig: SocialAuthServiceConfig = {
          autoLogin: false,
          providers: [
            {
              id: GoogleLoginProvider.PROVIDER_ID,
              provider: new GoogleLoginProvider(clientId),
            },
          ],
          onError: (err) => {
            console.error(err);
          },
        };
        return socialAuthServiceConfig;
      },
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
