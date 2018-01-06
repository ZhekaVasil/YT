import allTime from '../datajson/alltime.json';
import { Component, OnInit } from '@angular/core';
import { Http } from "@angular/http";
import 'rxjs/add/operator/map'


@Component({
  selector: 'app-top-all-time',
  templateUrl: './top-all-time.component.html',
  styleUrls: ['./top-all-time.component.css']
})
export class TopAllTimeComponent implements OnInit {
  items: any[];
  constructor(private _http: Http) {
    this.items = [];
  }

  ngOnInit() {
    this.fetchData().subscribe(data => {
      this.items = data
    });
  }

  fetchData() {
    const url = `//asilak.net/datajson/allTime.json`;
    return this._http.get(url)
      .map(x => x.json());
  }

}
