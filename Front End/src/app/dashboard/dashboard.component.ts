import { Component, OnInit } from '@angular/core';

import { MENU_ITEMS } from './dashboard-menu';

import { NbMenuItem } from '@nebular/theme/components/menu/menu.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html'
})
export class DashboardComponent implements OnInit {
  menu: NbMenuItem[];
  ngOnInit() {
    this.menu = MENU_ITEMS;
  }


}

