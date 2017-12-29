import today from '../datajson/today.json';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-top-today',
  templateUrl: './top-today.component.html',
  styleUrls: ['./top-today.component.css']
})
export class TopTodayComponent implements OnInit {
  ids: string[];
  constructor() {
    this.ids = today;
  }

  ngOnInit() {
  }

}
