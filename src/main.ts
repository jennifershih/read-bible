import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppConfig, APP_CONFIG } from './app/app.config';
import { AppModule } from './app/app.module';

fetch('./assets/config.json')
  .then((res) => res.json())
  .then((config) => {
    const appConfig: AppConfig = {
      openApiKey: config.openApiKey,
    };
    return appConfig;
  })
  .then((appConfig) =>
    platformBrowserDynamic([
      { provide: APP_CONFIG, useValue: appConfig },
    ]).bootstrapModule(AppModule)
  )
  .catch((err) => console.error(err));
