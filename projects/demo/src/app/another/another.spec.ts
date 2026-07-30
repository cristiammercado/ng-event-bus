import { TestBed } from '@angular/core/testing';

import { NgEventBus } from '../../../../ng-event-bus/src/lib/ng-event-bus';

import { Another } from './another';
import { Message } from '../types/message';

describe('Another', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Another],
      providers: [NgEventBus],
    }).compileComponents();
  });

  it('should display its empty state initially', () => {
    const fixture = TestBed.createComponent(Another);
    fixture.detectChanges();

    expect(fixture.componentInstance.items()).toEqual([]);
    expect(fixture.nativeElement.textContent).toContain('Send your first event to see it here.');
  });

  it('should receive and render channel messages', () => {
    const fixture = TestBed.createComponent(Another);
    const eventBus = TestBed.inject(NgEventBus);
    fixture.detectChanges();

    eventBus.cast<Message>('channel-1', { text: 'A received message' });
    fixture.detectChanges();

    expect(fixture.componentInstance.items()).toHaveLength(1);
    expect(fixture.componentInstance.items()[0].data).toEqual({ text: 'A received message' });
    expect((fixture.nativeElement.querySelector('textarea') as HTMLTextAreaElement).value).toContain(
      'A received message'
    );
  });

  it('should ignore messages from other channels', () => {
    const fixture = TestBed.createComponent(Another);
    const eventBus = TestBed.inject(NgEventBus);
    fixture.detectChanges();

    eventBus.cast<Message>('channel-2', { text: 'Ignored message' });
    fixture.detectChanges();

    expect(fixture.componentInstance.items()).toEqual([]);
  });

  it('should clear all received messages', () => {
    const fixture = TestBed.createComponent(Another);
    const eventBus = TestBed.inject(NgEventBus);
    fixture.detectChanges();

    eventBus.cast<Message>('channel-1', { text: 'First message' });
    eventBus.cast<Message>('channel-1', { text: 'Second message' });
    expect(fixture.componentInstance.items()).toHaveLength(2);

    eventBus.cast<Message>('channel-1', { text: 'clear' });
    fixture.detectChanges();

    expect(fixture.componentInstance.items()).toEqual([]);
    expect(fixture.nativeElement.querySelector('textarea')).toBeNull();
  });
});
