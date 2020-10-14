import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { PokemonComponent } from './pokemon/pokemon.component';
import { ListComponent } from './list/list.component';
import { HeldItemsComponent } from './held-items/held-items.component';
import { MovesComponent } from './moves/moves.component';
import { PokemonService } from './services/pokemon.service';
import { PokeFormatPipe } from './poke-format.pipe';
import { TypeColorDirective } from './type-color.directive';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PokemonComponent,
    ListComponent,
    HeldItemsComponent,
    MovesComponent,
    PokeFormatPipe,
    TypeColorDirective,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    PokemonService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
