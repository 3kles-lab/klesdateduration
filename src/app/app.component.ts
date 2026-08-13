import { Component } from '@angular/core';
import { KlesDateDurationModule } from 'dist/kles-date-duration';
import { DateTime } from 'luxon';

@Component({
    selector: 'app-root',
    standalone: true,
    imports: [KlesDateDurationModule],
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
})
export class AppComponent {
    date = DateTime.now().minus({ days: 2 });
    date2 = DateTime.now().minus({ years: 52 });
    date3 = DateTime.now().minus({ months: 5 });
    date4 = DateTime.now().minus({ hours: 5 });
    date5 = DateTime.now().minus({ minutes: 5 });
    date6 = DateTime.now().minus({ seconds: 5 });
}
