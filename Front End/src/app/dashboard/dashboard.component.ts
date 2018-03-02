import { Component, OnInit } from '@angular/core';

import { MENU_ITEMS } from './dashboard-menu';

import { NbMenuItem } from '@nebular/theme/components/menu/menu.service';
import { MENU_ITEMS_loggedin } from './dashboard-menu-loggedin';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html'
})
export class DashboardComponent implements OnInit {
  menu: NbMenuItem[];
  ngOnInit() {
    if(window.sessionStorage.username==""){
      this.menu = MENU_ITEMS;
      }
      else{
        this.menu = MENU_ITEMS_loggedin;
      }
  }


}

