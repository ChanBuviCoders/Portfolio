import { bootstrapApplication } from '@angular/platform-browser';
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './app.html',
  styleUrl: './styles.scss'
})
export class AppComponent {
  readonly experiences = [
    { company: 'Intellect Design Arena', role: 'Java full-stack developer', dates: 'Sep 2025 — Present', location: 'Chennai, Tamilnadu', tag: '01', description: 'Modernizing enterprise banking infrastructure for the ENBD project — migrating EJB layers to Spring Boot and upgrading a 13-module Angular platform to Angular 19.', stack: ['Angular 18', 'Spring Boot 3', 'Java 17', 'Oracle SQL', 'Microservices'] },
    { company: 'Engage2Serve', role: 'Java full-stack developer', dates: 'Sep 2024 — Sep 2025', location: 'Chennai, Tamilnadu', tag: '02', description: 'Built a student recruitment platform spanning recruit, retain, and alumni connect. Created configurable screens, dynamic forms, online applications, jobs, FAQs, events, and surveys.', stack: ['Angular 18', 'PrimeNG', 'MySQL', 'Docker', 'Jenkins'] },
    { company: 'Solvedge Technology', role: 'Angular Developer', dates: 'Jun 2022 — Aug 2024', location: 'Chennai, Tamilnadu', tag: '03', description: 'Delivered Recovery Coach, a healthcare product with patient management, scheduling, care partners, documents, exercise videos, and surveys. Led Angular version migrations and modularization.', stack: ['Angular 5 → 14', 'RxJS', 'MS SQL Server', 'Spring Boot', 'Docker'] }
  ];
  readonly skills = ['Angular', 'TypeScript', 'JavaScript', 'HTML5', 'SCSS', 'RxJS', 'Angular Material', 'PrimeNG', 'Java 17', 'Spring Boot 3', 'REST APIs', 'Microservices', 'Hibernate', 'JPA', 'Oracle SQL', 'MySQL', 'MS SQL Server', 'Docker', 'Jenkins', 'GitLab'];
  readonly projects = [
    { number: '01', name: 'Learn Angular', type: 'Learning platform', description: 'An Angular learning application with a focused login experience and a practical foundation for exploring modern frontend development.', url: 'https://learnangular.onrender.com/#/login' },
    { number: '02', name: 'Udhay Builders', type: 'Business website', description: 'A clean online presence for a construction business, helping visitors discover services, projects, and ways to connect.', url: 'https://udhaybuildersweb.onrender.com/' }
  ];
  readonly education = [
    ['BE in Mechanical Engineering', 'University College of Engineering, Dindigul', '2019—2022', '84.58%'],
    ['Diploma in Mechanical Engineering', 'NPR Polytechnic College, Natham, Dindigul', '2017—2019', '91%'],
    ['12th', 'State Board of Tamilnadu', '2016—2017', '80.58%']
  ];
}

bootstrapApplication(AppComponent).catch((error: unknown) => console.error(error));
