import { Component, OnInit } from '@angular/core';
import { ListComponent } from '../list/list.component';

@Component({
  selector: 'app-held-items',
  template: `
    <ul *ngIf="list.length > 0; else none">
      <li *ngFor="let item of list">
        {{ item.item.name | pokeFormat }}
      </li>
    </ul>
    <ng-template #none>
      none
    </ng-template>
  `,
  styleUrls: ['./held-items.component.css']
})
export class HeldItemsComponent extends ListComponent {

  constructor() {
    super();
  }

}
