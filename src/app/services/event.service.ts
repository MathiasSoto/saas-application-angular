import { Injectable, Signal, signal } from '@angular/core';

interface EventData {
  active: boolean;
  data?: any;
}

@Injectable({
  providedIn: 'root',
})
export class EventService {
  private _events = signal<{ [key: string]: EventData }>({});

  get events(): Signal<{ [key: string]: EventData }> {
    return this._events;
  }

  emit(name: string, data: any = null) {
    this._events.set({
      ...this._events(),
      [name]: { active: true, data },
    });

    setTimeout(() => {
      this._events.set({
        ...this._events(),
        [name]: { active: false, data: null },
      });
    }, 0);
  }
}
