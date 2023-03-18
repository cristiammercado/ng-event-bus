import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { NgEventBus } from '../../../../src';

import { AppComponent } from './app.component';
import { AnotherComponent } from './another/another.component';

@NgModule({
  declarations: [AppComponent, AnotherComponent],
  imports: [BrowserModule],
  providers: [NgEventBus],
  bootstrap: [AppComponent],
})
export class AppModule {}
