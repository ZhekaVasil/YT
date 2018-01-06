import thisYear from '../datajson/thisYear.json';
import { Component, OnInit } from '@angular/core';
import { Http } from "@angular/http";
import 'rxjs/add/operator/map'

@Component({
  selector: 'app-top-this-year',
  templateUrl: './top-this-year.component.html',
  styleUrls: ['./top-this-year.component.css']
})
export class TopThisYearComponent implements OnInit {
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
    const url = `//asilak.net/datajson/thisYear.json`;
    return this._http.get(url)
      .map(x => x.json());
  }

}
