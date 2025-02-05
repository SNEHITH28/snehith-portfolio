import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ScrollService {
  private activeFragmentSubject = new BehaviorSubject<string>('home');
  activeFragment$ = this.activeFragmentSubject.asObservable();

  setActiveFragment(fragment: string) {
    this.activeFragmentSubject.next(fragment);
  }

  initializeScrollObserver() {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const fragment = entry.target.id;
            this.setActiveFragment(fragment);
          }
        });
      },
      {
        rootMargin: '-20% 0px -80% 0px' // Adjust these values to control when the section is considered "active"
      }
    );

    // Observe all sections
    document.querySelectorAll('section[id]').forEach((section) => {
      observer.observe(section);
    });
  }
}
