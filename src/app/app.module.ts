import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TopAllTimeComponent } from './top-all-time/top-all-time.component';
import { TopThisYearComponent } from './top-this-year/top-this-year.component';
import { TopTodayComponent } from './top-today/top-today.component';
import { TopLastHourComponent } from './top-last-hour/top-last-hour.component';
import { TopThisMonthComponent } from './top-this-month/top-this-month.component';
import { TopThisWeekComponent } from './top-this-week/top-this-week.component';

import { HttpModule, JsonpModule } from '@angular/http';

@NgModule({
  declarations: [
    AppComponent,
    TopAllTimeComponent,
    TopThisYearComponent,
    TopTodayComponent,
    TopLastHourComponent,
    TopThisMonthComponent,
    TopThisWeekComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    JsonpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
