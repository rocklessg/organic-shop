import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';
import  routeConfig from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routeConfig), provideClientHydration(), provideFirebaseApp(() => initializeApp({"projectId":"organic-shop-e185c","appId":"1:137383402011:web:0c570fb49d7d882c3876be","storageBucket":"organic-shop-e185c.appspot.com","apiKey":"AIzaSyBa9qk3OEZKRsjzmR8IxcRSYfH-EvE53bQ","authDomain":"organic-shop-e185c.firebaseapp.com","messagingSenderId":"137383402011"})), provideFirestore(() => getFirestore())]
};
