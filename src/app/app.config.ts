import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes), provideClientHydration(), importProvidersFrom(provideFirebaseApp(() => initializeApp({"projectId":"livesstats","appId":"1:924761438054:web:22da8ab59df1982b033aa7","storageBucket":"livesstats.appspot.com","apiKey":"AIzaSyDfbxesCK3XHNkpe6pC5kJmfni6mqKr9Lg","authDomain":"livesstats.firebaseapp.com","messagingSenderId":"924761438054"}))), importProvidersFrom(provideFirestore(() => getFirestore())), provideAnimationsAsync()]
};
