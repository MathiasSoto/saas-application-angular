import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { NgIcon, provideIcons } from '@ng-icons/core';
import {
  heroBars3,
  heroHome,
  heroUser,
  heroEllipsisVertical,
  heroUserCircle,
  heroAdjustmentsVertical,
  heroUserGroup,
  heroCog8Tooth,
} from '@ng-icons/heroicons/outline';

@Component({
  selector: 'app-sidebar',
  imports: [NgIcon, CommonModule],
  templateUrl: './sidebar.component.html',
  viewProviders: [
    provideIcons({
      heroBars3,
      heroHome,
      heroUser,
      heroEllipsisVertical,
      heroUserCircle,
      heroAdjustmentsVertical,
      heroUserGroup,
      heroCog8Tooth,
    }),
  ],
})
export class SidebarComponent {
  status: boolean = true;
  menu: Array<{ text: string; url: string; icon: string }> = [
    {
      text: 'Dashboard',
      url: '/',
      icon: 'heroAdjustmentsVertical',
    },
    {
      text: 'Users',
      url: '/users',
      icon: 'heroUserGroup',
    },
    {
      text: 'Settings',
      url: '/settings',
      icon: 'heroCog8Tooth',
    },
  ];

  toggle() {
    this.status = !this.status;
  }
}
