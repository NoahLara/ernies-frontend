import { Component, OnInit } from '@angular/core';
import { MenuOptionI } from 'src/app/core/interfaces';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css'],
})
export class MenuComponent implements OnInit {
  optionsMenu: MenuOptionI[] = [
    {
      link: '/credit-cards',
      name: 'Credit Cards',
      icon: 'credit_card',
    },
    {
      link: '/clients',
      name: 'Customers',
      icon: 'people_alt',
    },
    {
      link: '/orders',
      name: 'Orders',
      icon: 'plumbing',
    },
    {
      link: '/employees',
      name: 'Employees',
      icon: 'people',
    },
    {
      link: '/vehicles',
      name: 'Vehicles',
      icon: 'fire_truck',
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
