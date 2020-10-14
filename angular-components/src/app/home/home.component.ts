import { Component, OnInit } from '@angular/core';
import { Pokemon } from '../models/pokemon';
import { PokemonService } from '../services/pokemon.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  private pokemon: Pokemon;
  private pokeId: number;

  constructor(private pokemonService: PokemonService) { }

  ngOnInit() {
    this.pokeId = 1;
    this.getPokemon();
  }

  getPokemon() {
    this.pokemonService.getPokemonById(this.pokeId).subscribe(
      (resp) => {
        this.pokemon = resp;
      }
    );
  }

}
