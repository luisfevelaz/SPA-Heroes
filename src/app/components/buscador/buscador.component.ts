import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import { HeroService } from 'src/app/services/hero.services';

@Component({
  selector: 'app-buscador',
  templateUrl: './buscador.component.html',
  styleUrls: ['./buscador.component.css']
})
export class BuscadorComponent implements OnInit {

  constructor(private _aRoute: ActivatedRoute, private _heroService: HeroService) { }

  resultados: any = [];

  str:string = '';

  ngOnInit(): void {
    //obtener parametros de la ruta
    this._aRoute.params.subscribe(params =>{
      console.log(params['termino']);
      this.str = params['termino'];
      this.resultados = this._heroService.searchHeros(params['termino']);
      console.log(this.resultados);
      
    });
  }

}
