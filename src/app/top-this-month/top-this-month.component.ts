import thisMonth from '../datajson/thisMonth.json';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-top-this-month',
  templateUrl: './top-this-month.component.html',
  styleUrls: ['./top-this-month.component.css']
})
export class TopThisMonthComponent implements OnInit {
  ids: string[];
  constructor() {
    this.ids = thisMonth;
  }

  ngOnInit() {
  }

}
