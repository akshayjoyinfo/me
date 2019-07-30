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
  @ViewChild('commandbarSidenav', {static: false}) public sidenav: MatSidenav;

  myWorkRoutes: ROUTE[] = [
    {
      icon: 'assignment',
      route: 'sales/activities',
      title: 'Activities',
    }, {
      icon: 'dashboard',
      route: 'sales/dashboards',
      title: 'Dashboards',
    }
  ];

  customerRoutes: ROUTE[] = [
    {
      icon: 'contacts',
      route: 'sales/accounts',
      title: 'Accounts',
    }, {
      icon: 'people',
      route: 'sales/contacts',
      title: 'Contacts',
    }, {
      icon: 'settings_phone',
      route: 'sales/leads',
      title: 'Leads',
    }, {
      icon: 'account_box',
      route: 'sales/opportunities',
      title: 'Opportunities',
    }
  ];


  ngOnDestroy(): void {

  }

  constructor(private commandBarSidenavService: SidenavService) {

  }

  ngOnInit() {
    this.commandBarSidenavService.setSidenav(this.sidenav);
  }

}
