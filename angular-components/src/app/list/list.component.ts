import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-list',
  template: '',
})
export class ListComponent implements OnInit {
  @Input() public list: object[];

  constructor() { }

  ngOnInit() {
  }

}
