import { Component, OnInit } from '@angular/core';
import { MetaData, NgEventBus } from '../../../../src';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'demo';

  constructor(private eventBus: NgEventBus) {}

  ngOnInit(): void {
    this.eventBus.on('**').subscribe((value: MetaData) => this.writeToTextArea(value));
  }

  public sendMessage(): void {
    const e: HTMLElement | null = document.getElementById('message');

    if (e != null && e instanceof HTMLInputElement) {
      const value: string = e.value;
      this.eventBus.cast(value, { message: value });
    }
  }

  private writeToTextArea(value: MetaData): void {
    const e: HTMLElement | null = document.getElementById('messages');

    if (e != null && e instanceof HTMLTextAreaElement) {
      e.value = e.value + this.generateTime() + JSON.stringify(value) + '\n';
    }
  }

  private generateTime(): string {
    return `[${new Date().toISOString()}] `;
  }
}
