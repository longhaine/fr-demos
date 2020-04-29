import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CarouselComponent } from './carousel/carousel.component';
import {FrLumosModule} from 'fr-lumos';
import { FrCarouselModule } from 'fr-carousel';
import { HttpClientModule} from '@angular/common/http';
import { CarouselDefaultComponent } from './carousel/carousel-default/carousel-default';
import { CarouselNavigationsComponent } from './carousel/carousel-navigations/carousel-navigations';
import { FormsModule } from '@angular/forms';
import { CarouselConfigComponent } from './carousel/carousel-config/carousel-config';
@NgModule({
  declarations: [
    AppComponent,
    CarouselComponent,
    CarouselDefaultComponent,
    CarouselNavigationsComponent,
    CarouselConfigComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    FrCarouselModule,
    FrLumosModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
