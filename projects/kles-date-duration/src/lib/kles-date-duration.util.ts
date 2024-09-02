import { DateDurationIntl } from "./date-duration-intl";
import { ILabel } from "./interfaces/label.interface";

export class DateDurationUtil {

    public static generateLabel(_intl: DateDurationIntl, interval: any): { value: number, label: ILabel } {
        let value;
        let label: ILabel;
        if (interval.length('years') >= 1) {
            value = ~~interval.length('years');
            label = _intl.yearLabel;
        } else if (interval.length('months') >= 1) {
            value = ~~interval.length('months');
            label = _intl.monthLabel;
        } else if (interval.length('days') >= 1) {
            value = ~~interval.length('days');
            label = _intl.dayLabel;
        } else if (interval.length('hours') >= 1) {
            value = ~~interval.length('hours');
            label = _intl.hourLabel;
        } else if (interval.length('minutes') >= 1) {
            value = ~~interval.length('minutes');
            label = _intl.minuteLabel;
        } else {
            value = ~~interval.length('seconds');
            label = _intl.secondLabel;
        }
        return { value, label };
    }
}