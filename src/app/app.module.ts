import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './components/header/header.component';
import { RandomComponent } from './components/random/random.component';
import { DeveloperComponent } from './components/developer/developer.component';
import {MatButtonModule} from '@angular/material/button';
import {MatDialogModule} from '@angular/material/dialog';
import { HistoryButtunComponent } from './components/history-buttun/history-buttun.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    RandomComponent,
    DeveloperComponent,
    HistoryButtunComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatDialogModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
