import today from '../datajson/today.json';
import { Component, OnInit } from '@angular/core';
import { Http } from "@angular/http";
import 'rxjs/add/operator/map'

@Component({
  selector: 'app-top-today',
  templateUrl: './top-today.component.html',
  styleUrls: ['./top-today.component.css']
})
export class TopTodayComponent implements OnInit {
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
    const url = `//asilak.net/datajson/today.json`;
    return this._http.get(url)
      .map(x => x.json());
  }
}
