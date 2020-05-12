import { Component, OnInit } from '@angular/core';
import bulmaAccordion from '../../../../node_modules/bulma-extensions/bulma-accordion/dist/js/bulma-accordion.min.js';

@Component({
  selector: 'app-faq',
  templateUrl: './faq.component.html',
  styleUrls: [
    './faq.component.scss'
  ]
})
export class FaqComponent implements OnInit {

  panelOpenState = false;

  constructor() { }

  ngOnInit(): void {

  }

  
}
