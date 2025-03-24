import { Component } from '@angular/core';
import { EventService } from '../../services/event.service';

@Component({
  selector: 'app-header',
  imports: [],
  templateUrl: './header.component.html',
})
export class HeaderComponent {
  constructor(protected readonly eventService: EventService) {}

  toggleSidebar() {
    this.eventService.emit('sidebar_toggle');
  }
}
