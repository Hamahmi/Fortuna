import { Component, Input, OnInit } from '@angular/core';

import { NbMenuService, NbSidebarService } from '@nebular/theme';
import { NbMenuBag } from '@nebular/theme/components/menu/menu.service';
import { DashboardComponent } from '../../../dashboard/dashboard.component';

@Component({
  selector: 'ngx-header',
  styleUrls: ['./header.component.scss'],
  templateUrl: './header.component.html'
})
export class HeaderComponent implements OnInit {
  @Input() position = 'normal';
  user: any;
  userMenu: any[];

  constructor(
    private sidebarService: NbSidebarService,
    private menuService: NbMenuService
  ) {}

  ngOnInit() {
    this.userMenu = [{ title: 'Login' }];
    this.onMenuItemClick();
  }

  toggleSidebar(): boolean {
    this.sidebarService.toggle(true, 'menu-sidebar');
    return false;
  }

  goToHome() {
    this.menuService.navigateHome();
  }

  onMenuItemClick() {
    this.menuService.onItemClick().subscribe((bag: NbMenuBag) => {
      if (bag.item.title === 'login') {
        
      }
    });
  }
  clicked(){
    window.sessionStorage.username="";
    console.log(window.sessionStorage.username);
    this.menuService.navigateHome();
    window.location.reload();
    
  }
}
