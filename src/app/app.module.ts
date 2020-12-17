import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { FooterComponent } from './components/shared/footer/footer.component';
import { HomeComponent } from './components/home/home.component';
import { HerosComponent } from './components/heros/heros.component';
import { AboutComponent } from './components/about/about.component';

// Peticiones HTTP
import { HttpClientModule } from '@angular/common/http';

//rutas
import { RouterModule } from '@angular/router';
import { Error404Component } from './components/error404/error404.component';
import { HeroComponent } from './components/hero/hero.component';
import { BuscadorComponent } from './components/buscador/buscador.component';
import { HeroCardComponent } from './components/hero-card/hero-card.component';
import { PipesComponent } from './components/pipes/pipes.component';
import { CapitalizadoPipe } from './pipes/capitalizado/capitalizado.pipe';
import { DomSeguroPipe } from './pipes/domseguro/dom-seguro.pipe';
import { PasswordPipe } from './pipes/password/password.pipe';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    HomeComponent,
    HerosComponent,
    AboutComponent,
    Error404Component,
    HeroComponent,
    BuscadorComponent,
    HeroCardComponent,
    PipesComponent,
    CapitalizadoPipe,
    DomSeguroPipe,
    PasswordPipe
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot([
      {path: 'home', component:HomeComponent},
      {path: '', component:HomeComponent},
      {path: 'heros', component:HerosComponent},
      {path: 'about', component:AboutComponent},
      {path: 'pipes', component:PipesComponent},
      {path: 'hero/:id', component:HeroComponent},
      {path: 'results/:termino', component:BuscadorComponent},
      {path: '**', pathMatch:'full', component:Error404Component}
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
