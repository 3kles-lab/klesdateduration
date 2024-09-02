
import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { DateTime, DurationUnit, Interval } from "luxon";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],

})
export class AppComponent{

  date = DateTime.now().minus({days: 2})
  date2 = DateTime.now().minus({years: 52})

  constructor(){
   
  }
}
