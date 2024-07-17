import { Component, Inject } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  standalone: true,
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {

  constructor(@Inject(AuthService)private auth: AuthService) { }
  
  login() {
    this.auth.login();
  }
  ngOnInit() {}
}