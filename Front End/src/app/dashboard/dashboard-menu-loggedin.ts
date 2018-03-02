import { NbMenuItem } from '@nebular/theme';

export const MENU_ITEMS_loggedin: NbMenuItem[] = [
  { title: 'Dashboard', icon: 'nb-home', link: '/dashboard', home: true },
  {
    title: 'Items',
    icon: 'fa fa-bell',
    link: '/dashboard/items'
  },
  {
    title: 'store',
    icon: '	fa fa-shopping-bag',
  children:[
    {
      title: 'MainStore',
      icon: '	fa fa-th',
      link: '/dashboard/store/main'
    },
    {
      title: 'cameras',
      icon: 'fa fa-camera',
      link: '/dashboard/store/cameras'
    },
    {
      title: 'MyItems',
      icon: 'fa fa-shopping-basket',
      link: '/dashboard/store/myitems'
    }
  ]
},
  
  {
    title: 'About',
    icon: 'fa fa-question-circle',
    link: '/dashboard/about'
  }
  ];
