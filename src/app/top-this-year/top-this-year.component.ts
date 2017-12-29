import thisYear from '../datajson/thisYear.json';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-top-this-year',
  templateUrl: './top-this-year.component.html',
  styleUrls: ['./top-this-year.component.css']
})
export class TopThisYearComponent implements OnInit {
  ids: string[];
  constructor() {
    this.ids = thisYear;
  }

  ngOnInit() {
  }

}
