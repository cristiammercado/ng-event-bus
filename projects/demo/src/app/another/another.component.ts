import { Component, OnInit } from '@angular/core';

import { NgEventBus } from '../../../../ng-event-bus/src/lib/ng-event-bus';
import { MetaData } from '../../../../ng-event-bus/src/lib/meta-data';

import { Message } from '../types/message';

@Component({
  selector: 'app-another',
  templateUrl: './another.component.html',
  styleUrls: ['./another.component.scss'],
})
export class AnotherComponent implements OnInit {
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
