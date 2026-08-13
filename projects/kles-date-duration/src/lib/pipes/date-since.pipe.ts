import { Inject, Pipe, PipeTransform } from "@angular/core";
import { DateInput, DateTime, Interval } from "luxon";
import { DateDurationIntl } from "../date-duration-intl";
import { DateDurationUtil } from "../kles-date-duration.util";

@Pipe({
    name: 'dateSince',
    standalone: true
})
export class DateSincePipe implements PipeTransform {
    constructor(@Inject(DateDurationIntl) private readonly _intl: DateDurationIntl) { }

    transform(date: DateInput): string {
        const diff = Interval.fromDateTimes(date, DateTime.now());
        const { value, label } = DateDurationUtil.generateLabel(this._intl, diff)
        return this._intl.formatSince(value, label)
    }
}
