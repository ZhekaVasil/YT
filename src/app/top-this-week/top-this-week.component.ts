import thisWeek from '../datajson/thisWeek.json';
import { Component, OnInit } from '@angular/core';
import { Http } from "@angular/http";
import 'rxjs/add/operator/map'


@Component({
  selector: 'app-top-this-week',
  templateUrl: './top-this-week.component.html',
  styleUrls: ['./top-this-week.component.css']
})
export class TopThisWeekComponent implements OnInit {
  ids: string[];
  constructor(private _http: Http) {
    this.ids = [];
  }

  ngOnInit() {
    this.fetchData().subscribe(data => {
      this.ids = data
    });
  }

  fetchData() {
    const url = `//asilak.net/datajson/thisWeek.json`;
    return this._http.get(url)
      .map(x => x.json());
  }

}
