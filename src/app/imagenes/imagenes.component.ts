import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-imagenes',
  templateUrl: './imagenes.component.html',
  styleUrls: ['./imagenes.component.scss']
})
export class ImagenesComponent{
  @Input() productoseleccionadoDelPadre :any;
}
