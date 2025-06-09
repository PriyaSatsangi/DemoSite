import { Component, OnInit } from '@angular/core';
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
export class HomeComponent implements OnInit {
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
  ngOnInit() {
    setInterval(() => {
      this.nextSlide();
    }, 5000); // 10000 ms = 10 seconds
  }

  // client
  // testimonials = [
  //   {
  //     name: 'John Doe',
  //     text: 'Acutec helped us modernize our workflow effortlessly. Highly recommended!',
  //     photo: 'assets/client1.jpg',
  //   },
  //   {
  //     name: 'Jane Smith',
  //     text: 'Top-tier support and cutting-edge solutions. Fantastic team!',
  //     photo: 'assets/client2.jpg',
  //   },
  //   {
  //     name: 'Bob Johnson',
  //     text: 'Reliable, scalable, and always ahead of the curve. Great service!',
  //     photo: 'assets/client3.jpg',
  //   },
  //   {
  //     name: 'Alice Brown',
  //     text: 'Their team truly understands client needs and delivers fast.',
  //     photo: 'assets/client4.jpg',
  //   },
  // ];
  testimonials = [
    {
      name: 'John Doe',
      text: 'Acutec helped us modernize our workflow effortlessly. Highly recommended!',
      photo: 'https://randomuser.me/api/portraits/men/32.jpg',
    },
    {
      name: 'Jane Smith',
      text: 'Top-tier support and cutting-edge solutions. Fantastic team!',
      photo: 'https://randomuser.me/api/portraits/women/44.jpg',
    },
    {
      name: 'Bob Johnson',
      text: 'Reliable, scalable, and always ahead of the curve. Great service!',
      photo: 'https://randomuser.me/api/portraits/men/54.jpg',
    },
    {
      name: 'Alice Brown',
      text: 'Their team truly understands client needs and delivers fast.',
      photo: 'https://randomuser.me/api/portraits/women/68.jpg',
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
