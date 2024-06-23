import { Component, OnInit, inject } from '@angular/core';
import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';
import { Auth, onAuthStateChanged, User } from '@angular/fire/auth';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'bootstrap-navbar',
  standalone: true,
  imports: [NgbDropdownModule, CommonModule],
  templateUrl: './bootstrap-navbar.component.html',
  styleUrl: './bootstrap-navbar.component.css'
})
class BootstrapNavbarComponent implements OnInit {
  private auth: Auth = inject(Auth);
 // user = this.auth.currentUser;   
  user: User | null = null; 

  constructor() { 
    // Listen for authentication state changes
    onAuthStateChanged(this.auth, (user) => {
      this.user = user;
    });
  }

  // logUser(event: Event) {
  //   event.preventDefault(); // Prevent the default action
  //   console.log(`UserObj is the one: ${this.user?.displayName} None`);
  // } 
  
  logout() {
    this.auth.signOut();
  }
  ngOnInit(): void {
    
  }
}
export default BootstrapNavbarComponent;