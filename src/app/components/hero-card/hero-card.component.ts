import { Component, OnInit, Input, Output, EventEmitter, OnChanges, DoCheck, AfterContentInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-hero-card',
  templateUrl: './hero-card.component.html',
  styles: [
  ]
})
export class HeroCardComponent implements OnInit, OnChanges, DoCheck, AfterContentInit {
 

  //Recibir informacion de un componente padre
  @Input() PadreHero:any={};
  @Input() index:number;

  // Mandar información del hijo al padre
  @Output() selectedHero: EventEmitter<number>;

  constructor(private _aRouter:Router) {
    //console.log(this.PadreHero);
    console.log("Constrctor hero card");
    
    this.selectedHero = new EventEmitter();
   }
  ngAfterContentInit(){
    console.log("AfterCard");
    
  }

  ngDoCheck(){
    console.log("Evento DoCheck");
    
  }
  ngOnChanges(){
    console.log("Onchanges");
    
  }

  ngOnInit(): void {
  }

  Navegar(){
  this._aRouter.navigate(['/hero',this.index]);
  }

}
