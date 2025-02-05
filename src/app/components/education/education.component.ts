import { Component } from '@angular/core';

@Component({
  selector: 'app-education',
  standalone: true,
  imports: [],
  templateUrl: './education.component.html',
  styleUrl: './education.component.scss'
})
export class EducationComponent {
  universities = [
    {
      name: 'Clark University',
      logo: 'assets/images/clark-university.webp',
      degree: 'Master of Science',
      major: 'Computer Science',
      gpa: 3.84,
      totalGPA: 4.0,
      from: 'August 2017',
      to: 'May 2021'
    },
    {
      name: 'CMR Institute Of Technology',
      logo: 'assets/images/cmr.webp',
      degree: 'Bachelor of Technology',
      major: 'Electronics and Communications',
      gpa: 3.5,
      totalGPA: 4.0,
      from: 'January 2023',
      to: 'May 2024'
    }
  ]
}
