import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CabeceraComponent } from './cabecera/cabecera.component';
import { TablaComponent } from './tabla/tabla.component';
import { ImagenesComponent } from './imagenes/imagenes.component';
import { FiltroComponent } from './filtro/filtro.component';

@NgModule({
  declarations: [
    AppComponent,
    CabeceraComponent,
    TablaComponent,
    ImagenesComponent,
    FiltroComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
