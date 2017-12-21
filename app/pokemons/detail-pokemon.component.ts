import {Component, ComponentDecorator, OnInit} from '@angular/core';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { Pokemon } from './pokemon';
import { POKEMONS } from './mock-pokemons';
import {PokemonsService} from "./pokemons.service";

@Component({
    selector: 'detail-pokemon',
    template: `<div *ngIf="pokemon" class="row">
        <div class="col s12 m8 offset-m2">
            <h2 class="header center">{{ pokemon.name }}</h2>
            <div class="card horizontal hoverable">
                <div class="card-image">
                    <img [src]="pokemon.picture">
                </div>
                <div class="card-stacked">
                    <div class="card-content">
                        <table class="bordered striped">
                            <tbody>
                            <tr>
                                <td>Nom</td>
                                <td><strong>{{ pokemon.name }}</strong></td>
                            </tr>
                            <tr>
                                <td>Points de vie</td>
                                <td><strong>{{ pokemon.hp }}</strong></td>
                            </tr>
                            <tr>
                                <td>Dégâts</td>
                                <td><strong>{{ pokemon.cp }}</strong></td>
                            </tr>
                            <tr>
                                <td>Types</td>
                                <td>
                                    <span *ngFor="let type of pokemon.types" class="{{ type | pokemonTypeColor }}">{{ type }}</span>
                                </td>
                            </tr>
                            <tr>
                                <td>Date de création</td>
                                <td><em>{{ pokemon.created | date:"dd/MM/yyyy" }}</em></td>
                            </tr>
                            </tbody>
                        </table>
                    </div>
                    <div class="card-action">
                        <a (click)="goBack()">Retour</a>
                        <!-- On rajoute un lien vers la page d'édition de ce pokémon -->
                        <a (click)="goEdit(pokemon)">Editer</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <h4 *ngIf='!pokemon' class="center">Aucun pokémon à afficher !</h4>`,

})

export class DetailPokemonComponent implements OnInit {

    pokemons: Pokemon[] = null; // liste des pokémons de notre application
    pokemon: Pokemon = null; // pokémon à afficher dans le template

    constructor(private route: ActivatedRoute, private router: Router, private pokemonsService : PokemonsService) {}
    // on injecte 'route' pour récupérer les paramètres de l'url, et 'router' pour rediriger l'utilisateur.

    ngOnInit(): void {

        this.route.params.forEach((params: Params) => {
            let id = +params['id'];
            this.pokemon = this.pokemonsService.getPokemon(id); // on utilise le service pour récupérer un pokémon en fonction de son identifiant.
        });
    }

    // Méthode permettant de rediriger l'utilisateur vers la page principale de l'application.
    goBack(): void {
        this.router.navigate(['/pokemons']);
    }

    // On crée une méthode qui s'occupe de la redirection
    goEdit(pokemon: Pokemon): void {
        let link = ['/pokemon/edit', pokemon.id];
        this.router.navigate(link);
    }
}