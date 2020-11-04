import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipes',
  templateUrl: './pipes.component.html',
  styles: [
  ]
})
export class PipesComponent implements OnInit {
  bandera = true;
  Nombre: string = 'Luis Felipe VelazLo';
  NombreA: string= 'LuIs FeLiPe VeLaLo';
  videoURL = 'https://www.youtube.com/embed/ba0cod1F8OQ';
  ArrayPrueba = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K'];
  PI = Math.PI;
  Fecha = new Date();
  Precio = 199.99;

  constructor() { }

  ngOnInit(): void {
  }

 

}
