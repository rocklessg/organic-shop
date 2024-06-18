import { Component, OnInit } from '@angular/core';
import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'bootstrap-navbar',
  standalone: true,
  imports: [NgbDropdownModule],
  templateUrl: './bootstrap-navbar.component.html',
  styleUrl: './bootstrap-navbar.component.css'
})
class BootstrapNavbarComponent implements OnInit {
  constructor() { }
  ngOnInit(): void {
    
  }
}
export default BootstrapNavbarComponent;