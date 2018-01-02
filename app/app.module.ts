import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent }  from './app.component';
import {AppRoutingModule} from "./app-routing.module";
import {PageNotFoundComponent} from "./page-not-found.component";
import {PokemonsModule} from "./pokemons/pokemon.module";
import { HttpModule }    from '@angular/http'; // On importe de module
// Importations pour charger et configurer l'API simulée.
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService }  from './in-memory-data.service';


@NgModule({
    imports:      [ BrowserModule, PokemonsModule, AppRoutingModule, HttpModule, InMemoryWebApiModule.forRoot(InMemoryDataService) ],
    declarations: [ AppComponent, PageNotFoundComponent ],
    bootstrap:    [ AppComponent ]
})
export class AppModule { }