import { Component, OnInit } from '@angular/core';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'pier-change-color',
  templateUrl: './change-color.component.html',
  styleUrls: ['./change-color.component.scss']
})
export class ChangeColorComponent implements OnInit {
  constructor() { }
  color = 'blue';
  bg = 'yellow';
  boo = false;
  change = () => {
    this.boo = !this.boo;

    if (this.boo === true) {
      this.color = 'yellow';
      this.bg = 'blue';

    } else {
        this.color = 'blue';
        this.bg = 'yellow';
      }
  }

  ngOnInit() {

  }

}
