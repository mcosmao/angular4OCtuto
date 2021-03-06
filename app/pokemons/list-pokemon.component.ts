import {Component, OnInit} from '@angular/core';
import {Pokemon} from './pokemon';
import { POKEMONS } from './mock-pokemons';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { PokemonsService } from './pokemons.service';



@Component({
    selector: 'list-pokemon',
    template: `<h1 class='center'>Pokémons</h1>
    <div class='container'>
        <div class="row">
            
            <pokemon-search></pokemon-search>

            <div *ngFor='let pokemon of pokemons' class="col s6 m4">
                <div class="card horizontal" (click)="selectPokemon(pokemon)" pkmn-shadow-card>
                    <div class="card-image">
                        <img [src]="pokemon.picture">
                    </div>
                    <div class="card-stacked">
                        <div class="card-content">
                            <p>{{ pokemon.name }}</p>
                            <p><small>{{ pokemon.created | date:"dd/MM/yyyy" }}</small></p>
                            <span *ngFor='let type of pokemon.types' class="{{ type | pokemonTypeColor }}">{{ type }}</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>`,
})
export class ListPokemonComponent implements OnInit {

    pokemons:Pokemon[] = null;

    constructor(private router: Router,
                private pokemonService: PokemonsService) {}

    ngOnInit(): void {
        this.getPokemons();

    }

    getPokemons():void{
        this.pokemonService.getPokemons().then(pokemons => this.pokemons=pokemons);
    }

    selectPokemon(pokemon: Pokemon){
        console.log('Vous avez sélectionné ' + pokemon.name);
        let link = ['/pokemon', pokemon.id];
        this.router.navigate(link);

    }
}