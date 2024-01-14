import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './components/menu/menu.component';
import { TituloComponent } from './components/titulo/titulo.component';
import { CardGrandeComponent } from './components/card-grande/card-grande.component';
import { CardPequenoComponent } from './components/card-pequeno/card-pequeno.component';
import { HomeComponent } from './pages/home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    TituloComponent,
    CardGrandeComponent,
    CardPequenoComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
