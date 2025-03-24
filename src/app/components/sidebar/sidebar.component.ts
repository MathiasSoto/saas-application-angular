import { CommonModule } from '@angular/common';
import { Component, effect } from '@angular/core';
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
import { EventService } from '../../services/event.service';

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
  events;
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

  constructor(protected readonly eventService: EventService) {
    this.events = this.eventService.events;

    effect(() => {
      if (this.events()['sidebar_toggle']?.active) {
        // const data = this.events()['sidebar_toggle']?.data
        this.toggle();
      }
    });
  }

  ngOnInit() {
    this.status = JSON.parse(localStorage.getItem('sidebar_status') || 'true');
  }

  toggle() {
    this.status = !this.status;
    localStorage.setItem('sidebar_status', JSON.stringify(this.status));
  }
}
