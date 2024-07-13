import { Component, OnInit, inject } from '@angular/core';
import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';
import { CommonModule } from '@angular/common';
import { AuthService } from '../auth.service';

@Component({
  selector: 'bootstrap-navbar',
  standalone: true,
  imports: [NgbDropdownModule, CommonModule],
  templateUrl: './bootstrap-navbar.component.html',
  styleUrl: './bootstrap-navbar.component.css'
})
class BootstrapNavbarComponent implements OnInit { 
  constructor(public auth: AuthService) { }

  logUser(event: Event) {
    this.auth.logUser(event);
  }
  logout() {
    this.auth.logout();
  }
  ngOnInit(): void {
    
  }
}
export default BootstrapNavbarComponent;