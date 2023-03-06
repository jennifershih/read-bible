import { InjectionToken } from '@angular/core';

export interface AppConfig {
  openApiKey: string | undefined;
}

export const APP_CONFIG = new InjectionToken<AppConfig>('app.config');
