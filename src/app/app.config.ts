import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideHttpClient } from '@angular/common/http';
import { provideFirebaseApp, initializeApp } from '@angular/fire/app';
import { provideAuth, getAuth } from '@angular/fire/auth';
import routeConfig from './app.routes';
import { AuthService } from './auth.service';
import { AuthGuardService } from './auth-guard.service';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routeConfig),
    provideHttpClient(),
    provideFirebaseApp(() => initializeApp({
      projectId: "organic-shop-e185c",
      appId: "1:137383402011:web:0c570fb49d7d882c3876be",
      storageBucket: "organic-shop-e185c.appspot.com",
      apiKey: "AIzaSyBa9qk3OEZKRsjzmR8IxcRSYfH-EvE53bQ",
      authDomain: "organic-shop-e185c.firebaseapp.com",
      messagingSenderId: "137383402011"
    })),
    provideAuth(() => getAuth()),
    AuthService,
    AuthGuardService
  ],
  
};