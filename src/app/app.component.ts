import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import BootstrapNavbarComponent from './bootstrap-navbar/bootstrap-navbar.component'

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, BootstrapNavbarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'organic-shop';
}
