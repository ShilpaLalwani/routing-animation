import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ArticleComponent } from './article/article.component';

@NgModule({
  imports:      [ BrowserModule, BrowserAnimationsModule , AppRoutingModule],
  declarations: [ AppComponent , ArticleComponent, HomeComponent],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
