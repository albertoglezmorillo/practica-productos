import {Component, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'app-cabecera',
  templateUrl: './cabecera.component.html',
  styleUrls: ['./cabecera.component.scss']
})
export class CabeceraComponent{

  estiloCabecera: string = 'GRID';
  @Output () respuestaEstilo: EventEmitter<string> = new EventEmitter();

  cambiaEstilo():void{
    if(this.estiloCabecera==='FLEX'){
      this.estiloCabecera='GRID';
      this.respuestaEstilo.emit('GRID');
    }
    else {
      this.estiloCabecera='FLEX';
      this.respuestaEstilo.emit('FLEX');
    }
  }

}
