import { Component } from '@angular/core'
import { LoaderService } from './loader.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-loader',
  template: `
  <!-- " -->
    <div *ngIf="isLoading | async" class="loader-overlay">
      <div class="flicker-container">
        <img src="logo.png" alt="Flickering Image" class="flicker-image loader">
    </div>
    </div>
  `,
  styles: [
    `
      .loader-overlay {
        pointer-events: none;
        z-index:1900;
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(0, 0, 0, 0.5);
        display: flex;
        justify-content: center;
        align-items: center;
      }
      .loader {
       
        animation: flicker 4.5s infinite; /* Duration and repeat */
}

@keyframes flicker {
    0%, 100% {
        opacity: 1; /* Fully visible */
    }
    10%, 30%, 50%, 70%, 90% {
        opacity: 0; /* Invisible */
    }
    20%, 40%, 60%, 80% {
        opacity: 0.5; /* Flickering transparency */
    }
}
    `,
  ],
  standalone: true,
  imports: [CommonModule]
})
export class LoaderUiComponent {


  constructor(private loaderService: LoaderService) {
    console.log(this.isLoading);

  }
  isLoading = this.loaderService.isLoading;

}