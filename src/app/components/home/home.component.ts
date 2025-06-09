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
  angles = [-10, 37.5, 85, 132.5, 180]; // Clock positions: 12, 2, 4, 6

  sections = [
    { id: 'about', label: 'About Us' },
    { id: 'company', label: 'Our Company' },
    { id: 'client', label: 'Client Speak' },
    { id: 'team', label: 'Mission' },
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

  // client
  testimonials = [
    {
      name: 'John Doe',
      text: 'Acutec helped us modernize our workflow effortlessly. Highly recommended!',
    },
    {
      name: 'Jane Smith',
      text: 'Top-tier support and cutting-edge solutions. Fantastic team!',
    },
    {
      name: 'Bob Johnson',
      text: 'Reliable, scalable, and always ahead of the curve. Great service!',
    },
    {
      name: 'Alice Brown',
      text: 'Their team truly understands client needs and delivers fast.',
    },
  ];

  currentIndex = 0;

  nextSlide() {
    this.currentIndex = (this.currentIndex + 1) % this.testimonials.length;
  }

  prevSlide() {
    this.currentIndex =
      (this.currentIndex - 1 + this.testimonials.length) %
      this.testimonials.length;
  }
}
