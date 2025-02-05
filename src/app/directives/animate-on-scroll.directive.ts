import { Directive, ElementRef, OnInit, OnDestroy, Renderer2 } from '@angular/core';

@Directive({
  selector: '[animateOnScroll]',
  standalone: true
})
export class AnimateOnScrollDirective implements OnInit, OnDestroy {
  private observer: IntersectionObserver | undefined;

  constructor(
    private elementRef: ElementRef,
    private renderer: Renderer2
  ) {}

  ngOnInit() {
    this.observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const element = entry.target as HTMLElement;
          const animationClass = element.getAttribute('data-animation');

          if (animationClass) {
            // Remove animate class
            this.renderer.removeClass(element, 'animate');

            // Force reflow
            void element.offsetWidth;

            // Add animate class
            this.renderer.addClass(element, animationClass);
            this.renderer.addClass(element, 'animate');

            // Cleanup observer after animation
            if (this.observer) {
              this.observer.unobserve(element);
            }
          }
        }
      });
    }, {
      threshold: 0.1,
      rootMargin: '50px'
    });

    this.observer.observe(this.elementRef.nativeElement);
  }

  ngOnDestroy() {
    if (this.observer) {
      this.observer.disconnect();
    }
  }
}
