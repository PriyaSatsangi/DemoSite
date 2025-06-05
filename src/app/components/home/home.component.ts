import { Component } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { FooterComponent } from '../footer/footer.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, HeaderComponent, FooterComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {
  angles = [-10, 55, 115, 180]; // Clock positions: 12, 2, 4, 6

  sections = [
    { id: 'about', label: 'About Us' },
    { id: 'company', label: 'Our Company' },
    { id: 'client', label: 'Client Speak' },
    { id: 'contact', label: 'Contact' },
  ];
  activeSection = '';
  hoveredSection: string | null = null;

  ngAfterViewInit() {
    window.addEventListener('scroll', this.onScroll.bind(this));
  }

  scrollToSection(id: string) {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  }

  onScroll() {
    for (const section of this.sections) {
      const el = document.getElementById(section.id);
      if (el && el.getBoundingClientRect().top < window.innerHeight / 2) {
        this.activeSection = section.id;
      }
    }
  }
}
