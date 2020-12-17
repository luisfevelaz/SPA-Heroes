import { Component, OnInit, OnChanges, AfterContentInit,AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy } from '@angular/core';
import { HeroService } from 'src/app/services/hero.services';
import { Router } from '@angular/router';
import { NodeServiceService } from 'src/app/services/node-service.service';

//decorador 
@Component({
  selector: 'app-heros',
  templateUrl: './heros.component.html',
  styleUrls: ['./heros.component.css']
})
export class HerosComponent implements OnInit{

  constructor(private _heroService:HeroService, private _aRouter: Router, private node:NodeServiceService) {
    //console.log("Constructor de heros");
    
  }
  

  ArrayHeros: object[] = [];

  //se ejecuta en cuanto se termina de renderizar el componente
  ngOnInit(): void {
    this.node.getAll().subscribe((data: any) =>{

      this.ArrayHeros = data
    });
    
  }

  Navegar(index) {
    
    this._aRouter.navigate(['/hero',index]);
  }

}
