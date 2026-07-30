import { TestBed } from '@angular/core/testing';

import { MetaData } from '../../../ng-event-bus/src/lib/meta-data';
import { NgEventBus } from '../../../ng-event-bus/src/lib/ng-event-bus';

import { App } from './app';
import { Message } from './types/message';

describe('App', () => {
  beforeEach(async () => {
    vi.spyOn(console, 'info').mockImplementation(() => undefined);

    await TestBed.configureTestingModule({
      imports: [App],
    }).compileComponents();
  });

  afterEach(() => {
    vi.restoreAllMocks();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(App);

    expect(fixture.componentInstance).toBeTruthy();
  });

  it('should render the application title', () => {
    const fixture = TestBed.createComponent(App);
    fixture.detectChanges();

    expect(fixture.nativeElement.textContent).toContain('demo app is running!');
  });

  it('should publish the value entered by the user', () => {
    const fixture = TestBed.createComponent(App);
    fixture.detectChanges();
    const eventBus = fixture.debugElement.injector.get(NgEventBus);
    const input = fixture.nativeElement.querySelector('#message') as HTMLInputElement;
    const sendButton = Array.from(fixture.nativeElement.querySelectorAll('button')).find(
      (button) => (button as HTMLButtonElement).textContent?.trim() === 'SEND'
    ) as HTMLButtonElement;
    let received: MetaData<Message> | undefined;

    eventBus.on<Message>('channel-1').subscribe((event) => {
      received = event;
    });
    input.value = 'Hello from the demo';
    sendButton.click();

    expect(received?.key).toBe('channel-1');
    expect(received?.data).toEqual({ text: 'Hello from the demo' });
  });

  it('should render messages sent through the demo', () => {
    const fixture = TestBed.createComponent(App);
    fixture.detectChanges();
    const input = fixture.nativeElement.querySelector('#message') as HTMLInputElement;
    const sendButton = Array.from(fixture.nativeElement.querySelectorAll('button')).find(
      (button) => (button as HTMLButtonElement).textContent?.trim() === 'SEND'
    ) as HTMLButtonElement;

    input.value = 'Rendered message';
    sendButton.click();
    fixture.detectChanges();

    const output = fixture.nativeElement.querySelector('textarea') as HTMLTextAreaElement;
    expect(output.value).toContain('Rendered message');
  });

  it('should clear rendered messages', () => {
    const fixture = TestBed.createComponent(App);
    fixture.detectChanges();
    const eventBus = fixture.debugElement.injector.get(NgEventBus);
    const clearButton = Array.from(fixture.nativeElement.querySelectorAll('button')).find(
      (button) => (button as HTMLButtonElement).textContent?.trim() === 'CLEAR'
    ) as HTMLButtonElement;

    eventBus.cast<Message>('channel-1', { text: 'Message to clear' });
    fixture.detectChanges();
    expect(fixture.nativeElement.querySelector('textarea')).not.toBeNull();

    clearButton.click();
    fixture.detectChanges();

    expect(fixture.nativeElement.querySelector('textarea')).toBeNull();
    expect(fixture.nativeElement.textContent).toContain('Send your first event to see it here.');
  });

  it('should safely ignore send requests when the input is not available', () => {
    const fixture = TestBed.createComponent(App);
    fixture.detectChanges();
    fixture.nativeElement.querySelector('#message')?.remove();

    expect(() => fixture.componentInstance.sendMessage()).not.toThrow();
  });
});
