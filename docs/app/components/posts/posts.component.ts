import { Component, OnInit } from '@angular/core';
import titlecard from '../../../assets/metadata/titlecard.json';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: [
    './posts.component.scss'
  ]
})
export class PostsComponent implements OnInit {
  title = 'read-json-demo';
  TitleCard: any = titlecard;

  constructor() { }

  ngOnInit(): void {
  }

}
