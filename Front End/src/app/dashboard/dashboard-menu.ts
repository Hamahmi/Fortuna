import { NbMenuItem } from '@nebular/theme';

export const MENU_ITEMS: NbMenuItem[] = [
  { title: 'Dashboard', icon: 'nb-home', link: '/dashboard', home: true },
  {
    title: 'Items',
    icon: 'fa fa-bell',
    link: '/dashboard/items'
  },
  {
    title: 'Store',
    icon: 'fa fa-shopping-basket',
    link: '/dashboard/store'
  },
  {
    title: 'Login',
    icon: 'fa fa-user',
    link: '/dashboard/login'
  },
  {
  	title: 'Sign Up',
    icon: 'fa fa-user-plus',
    link: '/dashboard/signup'
  },
  {
    title: 'About',
    icon: 'fa fa-question-circle',
    link: '/dashboard/about'
  }
  ];
