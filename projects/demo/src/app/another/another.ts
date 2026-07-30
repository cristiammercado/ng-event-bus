import { Component, computed, inject, signal } from '@angular/core';
import { DatePipe, JsonPipe } from '@angular/common';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';

import { MetaData } from '../../../../ng-event-bus/src/lib/meta-data';
import { NgEventBus } from '../../../../ng-event-bus/src/lib/ng-event-bus';

import { Message } from '../types/message';

@Component({
  selector: 'app-another',
  templateUrl: './another.html',
  styleUrl: './another.scss',
  imports: [DatePipe, JsonPipe],
})
export class Another {
  private readonly eventBus = inject(NgEventBus);

  readonly items = signal<MetaData<Message>[]>([]);
  protected readonly orderedItems = computed(() => [...this.items()].reverse());

  constructor() {
    this.eventBus
      .on<Message>('channel-1')
      .pipe(takeUntilDestroyed())
      .subscribe((value) => this.processEvent(value));
  }

  private processEvent(value: MetaData<Message>): void {
    if (value.data?.text === 'clear') {
      this.items.set([]);
    } else {
      this.items.update((items) => [...items, value]);
    }
  }
}
