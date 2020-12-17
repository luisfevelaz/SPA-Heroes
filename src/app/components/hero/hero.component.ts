import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HeroService } from 'src/app/services/hero.services';
import { NodeServiceService } from 'src/app/services/node-service.service';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent implements OnInit {
  // variable que almacena la respuesta del método getHero que se encuentra en HeroService
  hero:any = {};

  flag= true;

  constructor(private _aRoute: ActivatedRoute, private _heroService:HeroService, private node: NodeServiceService) {

    this._aRoute.params.subscribe(params => {
      
      //this.hero = this._heroService.getHero(params['id']);
      this.node.getByID(params['id']).subscribe((data:any) =>{
        this.hero = data;
        
        if(this.hero.casa == 'Marvel'){
          this.flag = false;
        }
      });
      
    })

  }

  ngOnInit(): void {
  }

}
