import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import {MatButtonModule} from '@angular/material/button';
import { DefaultModule } from './layouts/default/default.module';


@NgModule({
  declarations: [
    AppComponent,
         
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatButtonModule,
    DefaultModule,
  ],
  providers: [
    provideClientHydration(),
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
