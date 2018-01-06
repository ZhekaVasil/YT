import thisMonth from '../datajson/thisMonth.json';
import { Component, OnInit } from '@angular/core';
import { Http } from "@angular/http";
import 'rxjs/add/operator/map'

@Component({
  selector: 'app-top-this-month',
  templateUrl: './top-this-month.component.html',
  styleUrls: ['./top-this-month.component.css']
})
export class TopThisMonthComponent implements OnInit {
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
    const url = `//asilak.net/datajson/thisMonth.json`;
    return this._http.get(url)
      .map(x => x.json());
  }

}
