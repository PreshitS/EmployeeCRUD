import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import { provideHttpClient, withFetch } from '@angular/common/http';

const appProviders = [
  provideHttpClient(withFetch()) 
];

bootstrapApplication(AppComponent, {
  providers: [
    ...appProviders,   
    ...appConfig.providers 
  ],
}).catch((err) => console.error(err));
