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
      title: 'Personal',
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
      icon: 'settings_phone',
      route: 'leads',
      title: 'Leads',
    }, {
      icon: 'account_box',
      route: 'opportunities',
      title: 'Opportunities',
    }
  ];


  ngOnDestroy(): void {

  }

  constructor(public media: MediaObserver, private router: Router) {
    this.router.events.subscribe((event: Event) => {
      switch (true) {
        case event instanceof NavigationStart: {
          this.delay(25000).then(dt => {
            console.log('done');
          });
          this.loading = true;
          break;
        }

        case event instanceof NavigationEnd:
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
