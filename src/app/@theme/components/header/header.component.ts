import { Component, Input, OnInit } from '@angular/core';

import { NbMenuService, NbSidebarService } from '@nebular/theme';
import { NbMenuBag } from '@nebular/theme/components/menu/menu.service';

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
    this.userMenu = [{ title: 'Logout' }];
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
      if (bag.item.title === 'Logout') {
        //Think about what to do ;)
      }
    });
  }
}
