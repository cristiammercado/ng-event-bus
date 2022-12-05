import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { NgEventBus } from '../../../../src';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule],
  providers: [NgEventBus],
  bootstrap: [AppComponent],
})
export class AppModule {}
