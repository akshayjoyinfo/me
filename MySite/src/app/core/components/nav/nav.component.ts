import { Component, OnInit, OnDestroy, ViewChild, ElementRef, Renderer2 } from '@angular/core';

import { MatSidenav } from '@angular/material';
import { SidenavService } from 'src/app/services/sidenav.service';

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

  layoutGap = '64';
  fixedInViewport = true;

  myWorkRoutes: ROUTE[] = [
    {
      icon: 'account_circle',
      route: 'about',
      title: 'About Me',
    }, {
      icon: 'dashboard',
      route: 'dashboards',
      title: 'Dashboards',
    }
  ];

  customerRoutes: ROUTE[] = [
    {
      icon: 'contacts',
      route: 'accounts',
      title: 'Accounts',
    }, {
      icon: 'people',
      route: 'contacts',
      title: 'Contacts',
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

  constructor() {

  }

  ngOnInit() {

  }

}
