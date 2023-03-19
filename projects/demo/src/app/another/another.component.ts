import { Component, OnInit } from '@angular/core';
import { Message } from '../types/message';
import { MetaData, NgEventBus } from '../../../../../src';

@Component({
  selector: 'app-another',
  templateUrl: './another.component.html',
})
export class AnotherComponent implements OnInit {
  constructor(private eventBus: NgEventBus) {}

  ngOnInit(): void {
    this.eventBus.on<Message>('channel-1').subscribe((value: MetaData<Message>) => this.writeToTextArea(value));
  }

  private writeToTextArea(value: MetaData<Message>): void {
    const e: HTMLElement | null = document.getElementById('messages');

    if (e != null && e instanceof HTMLTextAreaElement) {
      e.value = e.value + this.generateTime() + JSON.stringify(value) + '\n';
    }
  }

  private generateTime(): string {
    return `[${new Date().toISOString()}] `;
  }
}
