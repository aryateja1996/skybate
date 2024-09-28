import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { UIService } from '../../services/ui.service';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink, AsyncPipe],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  constructor(public uiService: UIService) {
  }
  toggleMenu() {
    this.uiService.setState({sideMenu: !this.uiService._uiState.sideMenu});
  }
}
