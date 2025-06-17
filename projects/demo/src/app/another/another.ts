import { Component, OnInit } from '@angular/core';
import { DatePipe, JsonPipe } from '@angular/common';

import { MetaData } from '../../../../ng-event-bus/src/lib/meta-data';
import { NgEventBus } from '../../../../ng-event-bus/src/lib/ng-event-bus';

import { Message } from '../types/message';

@Component({
  selector: 'app-another',
  templateUrl: './another.html',
  styleUrl: './another.scss',
  imports: [DatePipe, JsonPipe],
})
export class Another implements OnInit {
  items: MetaData<Message>[] = [];

  constructor(private eventBus: NgEventBus) {}

  ngOnInit(): void {
    this.eventBus.on<Message>('channel-1').subscribe((value: MetaData<Message>) => this.processEvent(value));
  }

  private processEvent(value: MetaData<Message>): void {
    if (value.data?.text === 'clear') {
      this.items = [];
    } else {
      this.items.push(value);
    }
  }
}
