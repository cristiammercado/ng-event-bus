import { Component } from '@angular/core';

import { NgEventBus } from '../../../ng-event-bus/src/lib/ng-event-bus';
import { MetaData } from '../../../ng-event-bus/src/lib/meta-data';

import { Message } from './types/message';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent {
  title: string = 'demo';

  constructor(private eventBus: NgEventBus) {
    this.eventBus.on('**').subscribe((value: MetaData) => console.info('[Demo] Event bus:', value.key, value.data));
  }

  public sendMessage(): void {
    const e: HTMLElement | null = document.getElementById('message');

    if (e != null && e instanceof HTMLInputElement) {
      const value: string = e.value;
      this.eventBus.cast<Message>('channel-1', { text: value });
    }
  }

  public clearAll(): void {
    this.eventBus.cast<Message>('channel-1', { text: 'clear' });
  }
}
