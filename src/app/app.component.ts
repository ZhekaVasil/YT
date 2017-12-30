import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  type: any;
  constructor() {
    this.type = {
      isTopHour: true,
      isTopToday: false,
      isTopThisWeek: false,
      isTopThisMonth: false,
      isTopThisYear: false,
      isTopAllTime: false
    };
  }

  showRegion(region) {
    Object.keys(this.type).forEach(type => {
      this.type[type] = type === region;
    });
  }
}


