import { ContactMeComponent } from './components/contact-me/contact-me.component';
import { Component, inject, OnInit } from '@angular/core';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { AboutMeComponent } from './components/about-me/about-me.component';
import { ActivatedRoute, Router } from '@angular/router';
import { SkillsComponent } from './components/skills/skills.component';
import { EducationComponent } from './components/education/education.component';
import { ExperienceComponent } from './components/experience/experience.component';
import { CertificatesComponent } from './components/certificates/certificates.component';
import { FooterComponent } from './components/footer/footer.component';
import { ScrollService } from './services/scroll.service';
import { ViewportScroller } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [NavbarComponent, HomeComponent, AboutMeComponent, SkillsComponent, EducationComponent, ExperienceComponent, ContactMeComponent, CertificatesComponent, FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  title = 'my-portfolio';
  activeFragment = '';
  private activedRouter: ActivatedRoute = inject(ActivatedRoute);

  constructor(
    private scrollService: ScrollService,
    private viewportScroller: ViewportScroller
  ) {
    this.scrollService.activeFragment$.subscribe(
      fragment => this.activeFragment = fragment
    );
    // Set scroll offset to account for fixed navbar
    this.viewportScroller.setOffset([0, 80]);
  }

  ngOnInit() {
    this.scrollService.initializeScrollObserver();
  }

  scrollToSection(fragment: string) {
    const element = document.getElementById(fragment);
    if (element) {
      const headerOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  }
}

