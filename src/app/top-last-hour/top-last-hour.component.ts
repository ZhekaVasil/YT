import lastHour from '../datajson/lastHour.json';
import { Component, OnInit } from '@angular/core';
import { Http } from "@angular/http";
import 'rxjs/add/operator/map'

@Component({
  selector: 'app-top-last-hour',
  templateUrl: './top-last-hour.component.html',
  styleUrls: ['./top-last-hour.component.css']
})
export class TopLastHourComponent implements OnInit {
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
    const url = `//asilak.net/datajson/lastHour.json`;
    return this._http.get(url)
      .map(x => x.json());
  }

}
