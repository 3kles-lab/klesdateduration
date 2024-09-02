import { Inject, Pipe, PipeTransform } from "@angular/core";
import { DateTime, Interval } from "luxon";
import { DateDurationIntl } from "../date-duration-intl";
import { DateDurationUtil } from "../kles-date-duration.util";

@Pipe({ name: 'dateSince' })
export class DateSincePipe implements PipeTransform {
    constructor(@Inject(DateDurationIntl) public _intl: DateDurationIntl) { }

    transform(date: Date, ...args: any[]) {
        const diff = Interval.fromDateTimes(date, DateTime.now());
        const { value, label } = DateDurationUtil.generateLabel(this._intl, diff)
        return this._intl.formatSince(value, label)
    }
}
