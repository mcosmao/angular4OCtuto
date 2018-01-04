import { NgModule }      from '@angular/core';
import {BrowserModule, Title} from '@angular/platform-browser';
import { AppComponent }  from './app.component';
import {AppRoutingModule} from "./app-routing.module";
import {PageNotFoundComponent} from "./page-not-found.component";
import {PokemonsModule} from "./pokemons/pokemon.module";
import { HttpModule }    from '@angular/http'; // On importe de module
// Importations pour charger et configurer l'API simulée.
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService }  from './in-memory-data.service';
import { LoginComponent }       from './login.component';
import { LoginRoutingModule }   from './login-routing.module';


@NgModule({
    imports:      [ BrowserModule, PokemonsModule, 	LoginRoutingModule, AppRoutingModule, HttpModule, InMemoryWebApiModule.forRoot(InMemoryDataService) ],
    declarations: [ AppComponent, LoginComponent, PageNotFoundComponent ],
    providers: [ Title ],
    bootstrap:    [ AppComponent ]
})
export class AppModule { }