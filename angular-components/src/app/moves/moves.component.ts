import { Component, OnInit } from '@angular/core';
import { ListComponent } from '../list/list.component';

@Component({
  selector: 'app-moves',
  template: `
    <ul>
      <li *ngFor="let move of list">
        Level {{ move.version_group_details[move.version_group_details.length - 1].level_learned_at }}: {{ move.move.name | pokeFormat }}
      </li>
    </ul>
  `,
  styleUrls: ['./moves.component.css']
})
export class MovesComponent extends ListComponent {

  constructor() {
    super();
  }

}
