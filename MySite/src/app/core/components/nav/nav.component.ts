import { Component, OnInit, OnDestroy, ViewChild, ElementRef, Renderer2 } from '@angular/core';

import { MatSidenav } from '@angular/material';
import { SidenavService } from 'src/app/services/sidenav.service';
import { MediaObserver } from '@angular/flex-layout';
import {
  Event,
  NavigationCancel,
  NavigationEnd,
  NavigationError,
  NavigationStart,
  Router
} from '@angular/router';



interface ROUTE {
  icon?: string;
  route?: string;
  title?: string;
}

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})

export class NavComponent implements OnInit, OnDestroy {
  loading = false;
  layoutGap = '64';
  fixedInViewport = true;

  myWorkRoutes: ROUTE[] = [
    {
      icon: 'account_circle',
      route: 'about',
      title: 'About',
    }, {
      icon: 'perm_identity',
      route: 'personal',
      title: 'Contact',
    }
  ];

  customerRoutes: ROUTE[] = [
    {
      icon: 'trending_up',
      route: 'experience',
      title: 'Experience',
    }, {
      icon: 'assessment',
      route: 'skills',
      title: 'Skills',
    }, {
      icon: 'work',
      route: 'projects',
      title: 'Projects',
    },{
      icon: 'school',
      route: 'education',
      title: 'Education',
    },{
      icon: 'library_books',
      route: 'blog',
      title: 'Blog',
    },{
      icon: 'cloud_download',
      route: 'resume',
      title: 'Resume',
    },{
      icon: 'send',
      route: 'contact',
      title: 'Leave Me a Message'
    }
  ];


  ngOnDestroy(): void {

  }

  constructor(public media: MediaObserver, private router: Router) {
    this.router.events.subscribe(event => {
      switch (true) {
        case event instanceof NavigationStart: {
          this.delay(25000).then(dt => {
          });
          this.loading = true;
          break;
        }

        case event instanceof NavigationEnd: {
          (window as any).ga('set', 'page', (event as NavigationEnd).urlAfterRedirects);
          (window as any).ga('send', 'pageview');
        }
                                             break;
        case event instanceof NavigationCancel:
        case event instanceof NavigationError: {
          this.loading = false;
          break;
        }
        default: {
          break;
        }
      }
    });
  }

  ngOnInit() {

  }
  async delay(ms: number) {
    await new Promise(resolve => setTimeout(() => resolve(), ms)).then(() => console.log('fired'));
}
}
