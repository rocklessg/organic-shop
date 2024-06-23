import { Component, OnInit, inject } from '@angular/core';
import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';
import { Auth } from '@angular/fire/auth';

@Component({
  selector: 'bootstrap-navbar',
  standalone: true,
  imports: [NgbDropdownModule],
  templateUrl: './bootstrap-navbar.component.html',
  styleUrl: './bootstrap-navbar.component.css'
})
class BootstrapNavbarComponent implements OnInit {
  private auth: Auth = inject(Auth);
  constructor() { }
  
  logout() {
    this.auth.signOut();
  }
  ngOnInit(): void {
    
  }
}
export default BootstrapNavbarComponent;