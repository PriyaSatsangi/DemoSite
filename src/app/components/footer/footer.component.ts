import { Component, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatToolbarModule } from '@angular/material/toolbar';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule, MatToolbarModule],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css',
})
export class FooterComponent {
  showFooter = false;

  @HostListener('window:scroll', [])
  onWindowScroll() {
    const scrollY = window.scrollY;
    const windowHeight = window.innerHeight;
    const documentHeight = document.documentElement.scrollHeight;

    // Show footer after half of the document is scrolled
    this.showFooter = scrollY > documentHeight / 2 - windowHeight / 2;
  }
}
