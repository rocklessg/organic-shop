import { Injectable, inject } from '@angular/core';
import { Auth, GoogleAuthProvider, signInWithRedirect, setPersistence, browserLocalPersistence } from '@angular/fire/auth';
import { User, onAuthStateChanged, signOut } from 'firebase/auth';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private auth: Auth = inject(Auth);
  private userSubject = new BehaviorSubject<User | null>(null);
  user$: Observable<User | null> = this.userSubject.asObservable();

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
  
  // logUser(event: Event) {
  //   event.preventDefault(); // Prevent the default action
  //   console.log(`UserObj is the one: ${this.userSubject.value?.displayName || 'None'}`);
  // }
}