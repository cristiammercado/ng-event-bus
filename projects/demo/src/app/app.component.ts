import { Component } from '@angular/core';

import { Message } from './types/message';

import { NgEventBus } from '../../../../src';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent {
  title = 'demo';

  constructor(private eventBus: NgEventBus) {}

  public sendMessage(): void {
    const e: HTMLElement | null = document.getElementById('message');

    if (e != null && e instanceof HTMLInputElement) {
      const value: string = e.value;
      this.eventBus.cast<Message>('channel-1', { text: value });
    }
  }
}
