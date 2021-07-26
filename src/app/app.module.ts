import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuControlComponent } from './sideMenu/menu-control/menu-control.component';
import { HeadcontrolComponent } from './header/headcontrol/headcontrol.component';
import { DetailAreaComponent } from './detail/detail-area/detail-area.component';
import { StringToBoolPipe } from './pipes/string-to-bool.pipe';

@NgModule({
  declarations: [
    AppComponent,
    MenuControlComponent,
    HeadcontrolComponent,
    DetailAreaComponent,
    StringToBoolPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
