import { Component, ChangeDetectionStrategy } from '@angular/core';
import { DateTime } from 'luxon';
import { KlesDateDurationModule } from 'kles-date-duration';

@Component({
    selector: 'app-root',
    imports: [KlesDateDurationModule],
    templateUrl: './app.component.html',
    changeDetection: ChangeDetectionStrategy.Eager,
    styleUrls: ['./app.component.scss']
})
export class AppComponent {
    date = DateTime.now().minus({ days: 2 });
    date2 = DateTime.now().minus({ years: 52 });
    date3 = DateTime.now().minus({ months: 5 });
    date4 = DateTime.now().minus({ hours: 12 });
    date5 = DateTime.now().minus({ minutes: 59 });
    date6 = DateTime.now().minus({ seconds: 59 });
}
