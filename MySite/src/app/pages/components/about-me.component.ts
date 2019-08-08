import { Component, OnInit } from '@angular/core';

export interface Tile {
  cols: number;
  rows: number;
}

@Component({
  selector: 'app-about-me',
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.scss']
})
export class AboutMeComponent implements OnInit {

  responsive = true;
  cols = 1;
  constructor() { }

  ngOnInit() {

  }

}
