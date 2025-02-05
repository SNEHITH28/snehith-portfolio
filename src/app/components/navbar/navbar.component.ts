import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent implements OnInit {
  @Input() activeFragment: string = '';

  constructor() {}

  isDarkTheme = false;
  isMobileMenuOpen = false;

  ngOnInit() {
    // Check if theme preference exists in localStorage
    const savedTheme = localStorage.getItem('theme');

    // Check system preference if no saved theme
    if (!savedTheme) {
      const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      this.isDarkTheme = prefersDark;
      this.updateTheme(prefersDark);
    } else {
      this.isDarkTheme = savedTheme === 'dark';
      this.updateTheme(this.isDarkTheme);
    }

    // Listen for system theme changes
    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (e) => {
      if (!localStorage.getItem('theme')) {
        this.isDarkTheme = e.matches;
        this.updateTheme(e.matches);
      }
    });
  }

  private updateTheme(isDark: boolean) {
    if (isDark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }

  toggleTheme() {
    this.isDarkTheme = !this.isDarkTheme;
    localStorage.setItem('theme', this.isDarkTheme ? 'dark' : 'light');
    this.updateTheme(this.isDarkTheme);
  }

  navbarItems = [
    {
      label: 'Home',
      fragment: 'home',
      icon: ''
    },
    {
      label: 'About Me',
      fragment: 'about-me',
      icon: ''
    },
    {
      label: 'Skills',
      fragment: 'skills',
      icon: ''
    },
    {
      label: 'Education',
      fragment: 'education',
      icon: ''
    },
    {
      label: 'Experience',
      fragment: 'experience',
      icon: ''
    },
    {
      label: 'Certificates',
      fragment: 'certificates',
      icon: ''
    },
    {
      label: 'Contact Me',
      fragment: 'contact-me',
      icon: ''
    }
  ]

  isActive(fragment: string): boolean {
    return this.activeFragment === fragment;
  }

  scrollToSection(fragment: string) {
    const element = document.getElementById(fragment);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  }

  toggleMobileMenu() {
    this.isMobileMenuOpen = !this.isMobileMenuOpen;
  }
}
