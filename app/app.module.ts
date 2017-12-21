import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent }  from './app.component';
import {AppRoutingModule} from "./app-routing.module";
import {PageNotFoundComponent} from "./page-not-found.component";
import {PokemonsModule} from "./pokemons/pokemon.module";

@NgModule({
    imports:      [ BrowserModule, PokemonsModule, AppRoutingModule ],
    declarations: [ AppComponent, PageNotFoundComponent ],
    bootstrap:    [ AppComponent ]
})
export class AppModule { }