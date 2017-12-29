import thisWeek from '../datajson/thisWeek.json';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-top-this-week',
  templateUrl: './top-this-week.component.html',
  styleUrls: ['./top-this-week.component.css']
})
export class TopThisWeekComponent implements OnInit {
  ids: string[];
  constructor() {
    this.ids = thisWeek;
  }

  ngOnInit() {
  }

}
