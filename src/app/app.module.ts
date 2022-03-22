import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CabeceraComponent } from './cabecera/cabecera.component';
<<<<<<< HEAD
import { ImagenesComponent } from './imagenes/imagenes.component';
=======
import { FiltroComponent } from './filtro/filtro.component';
>>>>>>> d3513d207870ae6c742fd6faedcd881367caaeb2

@NgModule({
  declarations: [
    AppComponent,
    CabeceraComponent,
<<<<<<< HEAD
    ImagenesComponent
=======
    FiltroComponent
>>>>>>> d3513d207870ae6c742fd6faedcd881367caaeb2
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
