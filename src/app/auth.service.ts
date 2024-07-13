import { Injectable, inject } from '@angular/core';
import { Auth, GoogleAuthProvider } from '@angular/fire/auth';
import { User, onAuthStateChanged, signInWithRedirect } from 'firebase/auth';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private auth: Auth = inject(Auth);
  user: User | null = null; 

  constructor() {
    onAuthStateChanged(this.auth, (user) => {
      this.user = user;
    });
  }
  
  login() {
    const provider = new GoogleAuthProvider();
    signInWithRedirect(this.auth, provider);
  }

  logout() {
    this.auth.signOut();
  }
  
  // logUser(event: Event) {
  //   event.preventDefault(); // Prevent the default action
  //   console.log(`UserObj is the one: ${this.user?.displayName} None`);
 // } 
}
