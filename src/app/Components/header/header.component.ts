import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent {
  flag: boolean = false;
  navbar_list: string[] = [];
  profile_manager: [{ item: string; icon: string }] = [{ item: '', icon: '' }];
  constructor() {
    this.navbar_list.push('Recipe', 'Shopping List');
    this.profile_manager.push(
      {
        item: 'Profile',
        icon: 'https://img.icons8.com/ios/25/gender-neutral-user--v1.png',
      },
      {
        item: 'Your Recieps',
        icon: 'https://img.icons8.com/ios/25/cutlery.png',
      },

      {
        item: 'Log out',
        icon: 'https://img.icons8.com/ios/25/logout-rounded--v1.png',
      }
    );
    this.flag = false;
  }
  showModal() {
    this.flag = !this.flag;
  }
}
