import lastHour from '../../../datajson/lastHour.json';
import { Component, OnInit } from '@angular/core';
import { Http } from "@angular/http";
import 'rxjs/add/operator/map'

@Component({
  selector: 'app-top-last-hour',
  templateUrl: './top-last-hour.component.html',
  styleUrls: ['./top-last-hour.component.css']
})
export class TopLastHourComponent implements OnInit {
  items: any[];
  constructor(private _http: Http) {
    this.items = [];
  }

  ngOnInit() {
    this.fetchData().subscribe(data => {
      this.items = data;
    });
  }

  fetchData() {
    const url = `//asilak.net/datajson/lastHour.json`;
    return this._http.get(url)
      .map(x => x.json());
  }

}
