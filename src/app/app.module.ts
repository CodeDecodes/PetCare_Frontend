import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import {
  NbActionsModule,
  NbButtonModule,
  NbCardModule,
  NbDialogModule,
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
import { LoginsignupComponent } from './loginsignup/loginsignup.component';
import { InfoComponent } from './info/info.component';

@NgModule({
  declarations: [
    AppComponent,
    SliderComponent,
    LoginsignupComponent,
    InfoComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule,
    AppRoutingModule,
    NbThemeModule.forRoot(),
    NbLayoutModule,
    NbButtonModule,
    NbCardModule,
    NbDialogModule.forRoot(),
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
