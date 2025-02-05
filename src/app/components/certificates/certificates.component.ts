import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { register } from 'swiper/element/bundle';
import { SwiperContainer } from 'swiper/element';

// Register Swiper web components
register();

@Component({
  selector: 'app-certificates',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './certificates.component.html',
  styleUrl: './certificates.component.scss',
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  encapsulation: ViewEncapsulation.None
})
export class CertificatesComponent implements OnInit {
  certificates = [
    {
      title: 'Smart Coder',
      certificateBy: 'Smart Interview',
      image: 'assets/images/smart-interview-certificate.png',
    },
    {
      title: 'Java (Basic)',
      certificateBy: 'HackerRank',
      image: 'assets/images/java-certificate.png',
    },
    {
      title: 'Problem Solving (Basic)',
      certificateBy: 'HackerRank',
      image: 'assets/images/problem-solving-certificate.png',
    },
    {
      title: 'Pre Education Certificate (PEP-2020)',
      certificateBy: 'EPAM Systems',
      image: 'assets/images/epam-pep-certificate.png',
    },
    {
      title: 'Programming, Data Structures and Algorithms Using Python',
      certificateBy: 'NPTEL',
      image: 'assets/images/python-nptel-certificate.jpg',
    },
    {
      title: 'Programming foundation with JavaScript, HTML and CSS',
      certificateBy: 'Duke University',
      image: 'assets/images/javascript-duke-certificate.png',
    },
  ];

  config = {
    slidesPerView: 1,
    spaceBetween: 16,
    centeredSlides: true,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    pagination: {
      clickable: true,
      el: '.swiper-pagination'
    },
    breakpoints: {
      640: {
        slidesPerView: 1,
        spaceBetween: 20,
        centeredSlides: true,
      },
      768: {
        slidesPerView: 2,
        spaceBetween: 24,
        centeredSlides: false,
      },
      1024: {
        slidesPerView: 3,
        spaceBetween: 30,
        centeredSlides: false,
      },
    },
    loop: true,
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    }
  };

  ngOnInit() {
    // Initialize Swiper
    const swiperEl = document.querySelector('swiper-container') as SwiperContainer;
    Object.assign(swiperEl, this.config);
    swiperEl.initialize();
  }
}
