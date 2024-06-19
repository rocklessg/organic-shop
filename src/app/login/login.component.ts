import { Component, inject } from '@angular/core';
import { Auth, signInWithRedirect, GoogleAuthProvider } from '@angular/fire/auth';

@Component({
  selector: 'app-login',
  standalone: true,
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {

  private auth: Auth = inject(Auth);
  constructor() { }
  
  login() {
    const provider = new GoogleAuthProvider();
    signInWithRedirect(this.auth, provider);
  }
  ngOnInit() {}
}