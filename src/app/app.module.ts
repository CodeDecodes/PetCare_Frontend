import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import {
  NbActionsModule,
  NbButtonModule,
  NbCardModule,
  NbFormFieldModule,
  NbIconModule,
  NbLayoutModule,
  NbSelectModule,
  NbThemeModule,
  NbUserModule,
} from '@nebular/theme';
import { CarouselModule } from 'ngx-owl-carousel-o';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NbEvaIconsModule } from '@nebular/eva-icons';
import { SliderComponent } from './slider/slider.component';

@NgModule({
  declarations: [AppComponent, SliderComponent],
  imports: [
    BrowserModule,
    RouterModule,
    AppRoutingModule,
    NbThemeModule.forRoot(),
    NbLayoutModule,
    NbButtonModule,
    NbCardModule,
    NbUserModule,
    NbIconModule,
    NbFormFieldModule,
    NbSelectModule,
    NbEvaIconsModule,
    BrowserAnimationsModule,
    CarouselModule,
    NbActionsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
