import { NgModule }       from '@angular/core';
import { CommonModule }   from '@angular/common';

import { ListPokemonComponent }   from './list-pokemon.component';
import { DetailPokemonComponent } from './detail-pokemon.component';
import { ShadowCardDirective }    from './shadow-card.directive';
import { PokemonTypeColorPipe }   from './pokemon-type-color.pipe';
import {PokemonRoutingModule} from "./pokemon-routing.module";
import {PokemonsService} from "./pokemons.service";
import { FormsModule }   from '@angular/forms';
import { EditPokemonComponent }   from './edit-pokemon.component';
import { PokemonFormComponent }   from './pokemon-form.component';

@NgModule({
    imports: [
        CommonModule,
        PokemonRoutingModule,
        FormsModule, // nouvelle déclaration
    ],
    declarations: [
        ListPokemonComponent,
        DetailPokemonComponent,
        ShadowCardDirective,
        PokemonTypeColorPipe,
        EditPokemonComponent,
        PokemonFormComponent
    ],
    providers: [PokemonsService]
})
export class PokemonsModule {}