import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-navigation-bar',
  templateUrl: './navigation-bar.component.html',
  styleUrls: ['./navigation-bar.component.scss']
})
export class NavigationBarComponent {
  loading = false;
  @Output() toggleSidenav = new EventEmitter<void>();

  mySkills: string[] = ['.NET Core', 'Angular', 'Full Stack Developer',
  'AZURE (AppService, AZURE SQL, Azure Functions)',
  'AWS(S3, Lambda, EMR, DynamoDB)', 'Devops', 'Python 3', 'Scrapy', 'Flask'];
  private returnUrl = '/';

  constructor(private router: Router) {

  }

}
