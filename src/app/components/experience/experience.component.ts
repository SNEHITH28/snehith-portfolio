import { Component } from '@angular/core';

interface Experience {
  companyName: string;
  companyLogo: string;
  clientName: string;
  clientLogo: string;
  role: string;
  from: string;
  to: string;
  location: string;
  responsibilities: string[];
  skills: string[];
}

@Component({
  selector: 'app-experience',
  standalone: true,
  imports: [],
  templateUrl: './experience.component.html',
  styleUrl: './experience.component.scss',
})
export class ExperienceComponent {
  experiences: Experience[] = [
    {
      companyName: 'Compnova',
      clientName: 'CSX',
      role: 'Software Engineer',
      from: 'Feb 2024',
      to: 'Currently',
      companyLogo: 'assets/images/compnova.webp',
      clientLogo: 'assets/images/csx.webp',
      location: 'Jacksonville, Fl, US',
      responsibilities: [
        'Drove end-to-end activities like requirement analysis, design, coding, and maintenance using Agile (Scrum), delivering 50+ stories on time and increasing team productivity by 20%.',
        'Built modular Angular applications with web components, micro frontends, and custom-built Directives, Pipes, and Components, enhancing reusability and maintainability by 30%.',
        'Employed RxJS and WebSocket for real-time data visualization, processing 200+ train updates per minute, and boosted train tracking efficiency by 50% using Angular, Mapbox, and Geo-JSON.',
        'Digitized 1,500+ documents using Ionic Framework, reducing paper usage and enabling offline access.',
        'Optimized performance with RxJS for batch API calls, reducing load times and enabling parallel processing.',
        'Developed RESTful APIs using Spring Boot for complex workflows, integrating MongoDB with Java drivers and leveraging aggregation pipelines for efficient data retrieval, boosting performance by 40%.',
        "Optimized backend services using Java's CompletableFuture, enhancing endpoint response times by 40%.",
        'Designed and implemented event-driven systems using Apache Kafka, enabling real-time data streaming and processing across distributed microservices.',
        'Built Kafka producer-consumer applications to publish and process events, ensuring efficient data flow.',
        'Managed CI/CD pipelines with Jenkins, automating deployments and improving efficiency by 35%.',
        'Collaborated with cross-functional teams via JIRA to track progress and resolve issues.',
        'Aligned technical solutions with client business goals, ensuring 100% satisfaction with deliverables.',
        'Facilitated code reviews to ensure quality and consistency before merging changes, reducing bugs by 15%.',
      ],
      skills: [
        'Angular',
        'Ionic Angular Framework',
        'Mapbox',
        'PrimeNG',
        'RxJS',
        'Java',
        'Spring Boot',
        'MongoDB',
        'Apache Kafka',
      ],
    },
    {
      companyName: 'Clark University',
      clientName: '',
      role: 'Teaching Assistant (Design & Analysis of Algorithm)',
      from: 'Aug 2023',
      to: 'Apr 2024',
      companyLogo: 'assets/images/clark-university.webp',
      clientLogo: '',
      location: 'Worcester, MA, US',
      responsibilities: [
        'Conducted meetings with professors to address student progress, boosting performance by 30%.',
        'Evaluated assignments and provided constructive feedback, improving overall quality by 15%.',
        'Set up one-on-one support and clarification sessions for students, enhancing their understanding of complex algorithm concepts and contributing to a 20% improvement in exam scores.',
      ],
      skills: [
        'Searching',
        'Sorting',
        'Hashing',
        'Dynamic Programming',
        'Greedy',
        'Arrays',
        'Stack',
        'Queue',
        'LinkedList',
        'Trees',
        'Graphs',
      ],
    },
    {
      companyName: 'Techigai',
      clientName: '',
      role: 'Software Engineer',
      from: 'Jan 2020',
      to: 'Dec 2022',
      companyLogo: 'assets/images/techigai.webp',
      clientLogo: '',
      location: 'Hyderabad, Telangana, India',
      responsibilities: [
        'Engaged in all SDLC phases using Agile methodology, achieving faster response to changes and feedback.',
        'Developed and maintained internal UI component libraries using Angular, standardizing design patterns and accelerating development workflows.',
        'Architected scalable Angular applications with reactive forms, boosting user satisfaction by 50%, and implemented role-based access using Angular guards for secure navigation.',
        'Constructed 50+ scalable REST APIs using Golang in a microservices architecture, with custom Gorilla middleware for authentication and logging, improving system reliability by 35%.',
        'Engineered PostgreSQL database schemas and executed CRUD operations, improving data retrieval speed by 50%, and developed efficient Golang migration scripts for seamless data transfer and updates.',
        'Developed React-based front-end modules for key features, integrating with REST APIs to deliver dynamic and responsive user interfaces.',
        'Implemented state management using Redux and Context API, ensuring consistent data flow and enhancing application performance.',
        'Designed and developed RESTful APIs using Spring Boot and JPA, enabling seamless integration with microservices and improving system scalability by 35%.',
        'Leveraged J2EE frameworks to build robust backend systems, ensuring high performance and reliability for enterprise-level applications.',
        'Identified root causes, assessed system impact, and devised solutions for defects in testing or production.',
        'Delivered monthly demos to stakeholders, highlighting progress and key features to ensure project alignment.',
        'Maintained code in Bitbucket with feature branches for each task, reducing code conflicts by 25%.',
        'Integrated AWS CloudWatch and tailored lambda functions for seamless log management and triggers.',
      ],
      skills: [
        'Angular',
        'React',
        'HTML',
        'SCSS',
        'TypeScript',
        'JavaScript',
        'Redux',
        'Material UI',
        'Chart.js',
        'AG Grid',
        'Golang',
        'Java',
        'Spring Boot',
        'J2EE',
        'PostgreSQL',
      ],
    },
  ];
}
