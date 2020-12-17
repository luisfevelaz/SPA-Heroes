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
export class HerosComponent implements OnInit/*, OnChanges, AfterContentInit,AfterContentChecked,AfterViewInit, AfterViewChecked, OnDestroy*/ {

  constructor(private _heroService:HeroService, private _aRouter: Router, private node:NodeServiceService) {
    //console.log("Constructor de heros");
    
  }
  /*ngOnDestroy(){
    console.log("OnDestroy");
    
  }
  ngAfterViewChecked(){
    console.log("AfterViewChecked");
    
  }
  ngAfterViewInit(){
    console.log("AfterViewInit");
    
  }
  ngAfterContentChecked(){
    console.log("AfterContentChecked")
  }
  ngAfterContentInit(){
    console.log("AfterContentInit");
    
  }

  ngOnChanges(){
    console.log("Evento ngOnChanges");
    
  }*/

  ArrayHeros: object[] = [];

  //se ejecuta en cuanto se termina de renderizar el componente
  ngOnInit(): void {
    this.node.getAll().subscribe((data: any) =>{
      //console.log(data);
      this.ArrayHeros = data
    });
    
  }

  Navegar(index) {
    //console.log(index);
    this._aRouter.navigate(['/hero',index]);
  }

}
