import lastHour from '../datajson/lastHour.json';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-top-last-hour',
  templateUrl: './top-last-hour.component.html',
  styleUrls: ['./top-last-hour.component.css']
})
export class TopLastHourComponent implements OnInit {
  ids: string[];
  constructor() {
    this.ids = lastHour;
  }

  ngOnInit() {
  }

}
