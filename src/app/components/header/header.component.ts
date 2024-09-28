import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  isMenuOpen: boolean = false;

  // Function to toggle the hamburger menu
  toggleMenu(): void {
    console.log(this.isMenuOpen);
    
    this.isMenuOpen = !this.isMenuOpen;
  }
}
