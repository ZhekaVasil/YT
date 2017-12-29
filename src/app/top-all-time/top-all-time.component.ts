import allTime from '../datajson/alltime.json';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-top-all-time',
  templateUrl: './top-all-time.component.html',
  styleUrls: ['./top-all-time.component.css']
})
export class TopAllTimeComponent implements OnInit {
  ids: string[];
  constructor() {
    this.ids = allTime;
  }

  ngOnInit() {
  }

}
