import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SecondShadowComponent } from './second-shadow/second-shadow.component';
import { ThirdShadowComponent } from './third-shadow/third-shadow.component';

@NgModule({
  declarations: [
    AppComponent,
    SecondShadowComponent,
    ThirdShadowComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
