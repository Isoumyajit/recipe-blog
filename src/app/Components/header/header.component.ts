import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent {
  navbar_list: string[] = [];
  constructor() {
    this.navbar_list.push('Recipe', 'Shopping List', 'Profile');
  }
}
