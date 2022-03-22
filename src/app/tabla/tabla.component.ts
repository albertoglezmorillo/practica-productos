import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-tabla',
  templateUrl: './tabla.component.html',
  styleUrls: ['./tabla.component.scss']
})
export class TablaComponent implements OnInit {

  // @Input () producto:any;
  producto:any =  {
    "id": "20331",
    "referencia": "861018",
    "marca_codigo": "GSP",
    "marca_nombre": "GSP",
    "marca_logo": "https://logistics.beateam.es/azurglobal/storage/225/GSP.png",
    "descripcion": "GSP JUNTA HOMOCINETICA SEAT",
    "seccion": "MECANICA",
    "familia": "JUNTAS HOMOCINETICAS",
    "lote": "1",
    "fecha_sincronizacion": "2021-09-22 10:27:05",
    "imagen_producto": "https://digital-assets.tecalliance.services/images/800/acf76bfefaf5a938ec10cfd50b8839b4926b75bb.jpg"
  };

  constructor() { }

  ngOnInit(): void {
  }

}
