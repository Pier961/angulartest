import { Component, OnInit } from '@angular/core';
import { TouchSequence } from 'selenium-webdriver';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'pier-title',
  templateUrl: './title.component.html',
  styleUrls: ['./title.component.scss']
})
export class TitleComponent implements OnInit {

  constructor() { }

  title = ' we pier';
  nome = ' Pier';
  counter = 0;
  isOff = true;
  color = '#fc3434';

  great = () => {
    return 'Ciao ' + this.nome;
  }
  increment = () => {
    this.counter++;
    // tslint:disable-next-line:no-unused-expression
    this.isOff = !this.isOff;
  }
  ngOnInit() {
    console.log('Questo componente e\' pronto');
  //  setInterval(this.increment , 1000);

  }

}


