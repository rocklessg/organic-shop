// import { Injectable, inject } from '@angular/core';
// import { Auth, GoogleAuthProvider, signOut } from '@angular/fire/auth';
// import { User, onAuthStateChanged, signInWithRedirect, setPersistence, browserLocalPersistence } from 'firebase/auth';
// import { BehaviorSubject } from 'rxjs';

import { Injectable, inject } from '@angular/core';
import { Auth, GoogleAuthProvider, signInWithRedirect, setPersistence, browserLocalPersistence } from '@angular/fire/auth';
import { User, onAuthStateChanged, signOut } from 'firebase/auth';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private auth: Auth = inject(Auth);
  private userSubject = new BehaviorSubject<User | null>(null);
  user$ = this.userSubject.asObservable();

  constructor() {
    console.log('Initializing AuthService...');
    
    // Set authentication persistence
    setPersistence(this.auth, browserLocalPersistence).then(() => {
      onAuthStateChanged(this.auth, (user) => {
        console.log('Auth state changed:', user);
        this.userSubject.next(user);
      }, (error) => {
        console.error('Error in onAuthStateChanged:', error);
      });
    }).catch((error) => {
      console.error('Error setting persistence:', error);
    });
  }
  
  login() {
    const provider = new GoogleAuthProvider();
    signInWithRedirect(this.auth, provider);
  }

  logout() {
    signOut(this.auth);
  }
  
  logUser(event: Event) {
    event.preventDefault(); // Prevent the default action
    console.log(`UserObj is the one: ${this.userSubject.value?.displayName || 'None'}`);
  }

  // private auth: Auth = inject(Auth);
  // user: User | null = null; 

  // constructor() {
  //   onAuthStateChanged(this.auth, (user) => {
  //     this.user = user;
  //   });
  // }
  
  // login() {
  //   const provider = new GoogleAuthProvider();
  //   signInWithRedirect(this.auth, provider);
  // }

  // logout() {
  //   this.auth.signOut();
  // }
  
  // logUser(event: Event) {
  //   event.preventDefault(); // Prevent the default action
  //   console.log(`UserObj is the one: ${this.user?.displayName} None`);
  } 
// private auth: Auth = inject(Auth);
//  // user = this.auth.currentUser;   
//   user: User | null = null; 

//   constructor() { 
//     // Listen for authentication state changes
//     onAuthStateChanged(this.auth, (user) => {
//       this.user = user;
//     });
//   }

//   // logUser(event: Event) {
//   //   event.preventDefault(); // Prevent the default action
//   //   console.log(`UserObj is the one: ${this.user?.displayName} None`);
//   // } 
  
//   logout() {
//     this.auth.signOut();
//   }

//}
