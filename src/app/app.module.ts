import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {MatButtonToggleModule} from '@angular/material/button-toggle'; 

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CharacterGalleryComponent } from './character-gallery/character-gallery.component';
import { ComicGalleryComponent } from './comic-gallery/comic-gallery.component';

@NgModule({
  declarations: [
    AppComponent,
    CharacterGalleryComponent,
    ComicGalleryComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatButtonModule,
    MatButtonToggleModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
