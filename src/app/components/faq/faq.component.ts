import { Component, OnInit } from '@angular/core';
import bulmaAccordion from 'bulma-extensions/bulma-accordion/dist/js/bulma-accordion.min';

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
