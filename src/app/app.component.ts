import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent{

  estilo :string = 'GRID';
  productoSeleccionado :any;

  cambioEstilo(event :string){
    this.estilo = event
  }
  seleccionaProducto(producto:any){
    this.productoSeleccionado = producto;
  }
}
