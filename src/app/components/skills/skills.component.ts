import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RatingModule } from 'primeng/rating';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [RatingModule, FormsModule],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.scss'
})
export class SkillsComponent {
  skills = [
    {
      name: 'Angular',
      icon: 'devicon-angularjs-plain colored',
      rating: 4.5
    },
    {
      name: 'React',
      icon: 'devicon-react-original colored',
      rating: 4
    },
    {
      name: 'HTML',
      icon: 'devicon-html5-plain colored',
      rating: 4.5
    },
    {
      name: 'CSS/SCSS',
      icon: 'devicon-css3-plain colored',
      rating: 4.5
    },
    {
      name: 'Ionic Framework',
      icon: 'devicon-ionic-original colored',
      rating: 3.5
    },
    {
      name: 'RxJS',
      icon: 'devicon-rxjs-plain colored',
      rating: 4.5
    },
    {
      name: 'Java',
      icon: 'devicon-java-plain colored',
      rating: 4
    },
    {
      name: 'Golang',
      icon: 'devicon-go-original-wordmark colored',
      rating: 4.5
    },
    {
      name: 'TypeScript',
      icon: 'devicon-typescript-plain colored',
      rating: 4.5
    },
    {
      name: 'C#',
      icon: 'devicon-csharp-plain colored',
      rating: 4
    },
    {
      name: '.NET',
      icon: 'devicon-dotnetcore-plain colored',
      rating: 4
    },
    {
      name: 'Spring Boot',
      icon: 'devicon-spring-original colored',
      rating: 4
    },
    {
      name: 'Express',
      icon: 'devicon-express-original colored',
      rating: 4
    },
    {
      name: 'PostgreSQL',
      icon: 'devicon-postgresql-plain colored',
      rating: 4
    },
    {
      name: 'MongoDB',
      icon: 'devicon-mongodb-plain colored',
      rating: 4
    },
    {
      name: 'GraphQL',
      icon: 'devicon-graphql-plain  colored',
      rating: 4
    },
    {
      name: 'AWS',
      icon: 'devicon-amazonwebservices-plain-wordmark colored',
      rating: 3.5
    },
    {
      name: 'Jenkins',
      icon: 'devicon-jenkins-plain colored',
      rating: 4
    },
  ];
}
