import { ApplicationConfig, importProvidersFrom, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import {provideNativeDateAdapter} from '@angular/material/core';
import {MaterialModule} from './component/material/material.module';

export const appConfig: ApplicationConfig = {
  providers: [
	  provideZoneChangeDetection({ eventCoalescing: true }), 
	  provideRouter(routes),
	  provideNativeDateAdapter(),
	  importProvidersFrom(
		MaterialModule 
	  ), provideAnimationsAsync()
  ]
};
