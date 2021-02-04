import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AppModuleModule } from './app-module/app-module.module';
import { HomeComponent } from './components/home/home.component';
import { HeaderComponent } from './components/header/header.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AppModuleModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
