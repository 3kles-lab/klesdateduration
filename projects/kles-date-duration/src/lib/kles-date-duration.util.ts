import { Interval } from "luxon";
import { DateDurationIntl } from "./date-duration-intl";
import { ILabel } from "./interfaces/label.interface";

export class DateDurationUtil {
    public static generateLabel(_intl: DateDurationIntl, interval: Interval): { value: number, label: ILabel } {
        let value;
        let label: ILabel;

        const yearsInterval: number = interval.length('years');
        const monthsInterval: number = interval.length('months');
        const daysInterval: number = interval.length('days');
        const hoursInterval: number = interval.length('hours');
        const minutesInterval: number = interval.length('minutes');
        const secondsInterval: number = interval.length('seconds');

        if (yearsInterval >= 1) {
            value = ~~yearsInterval;
            label = _intl.yearLabel;
        } else if (monthsInterval >= 1) {
            value = ~~monthsInterval;
            label = _intl.monthLabel;
        } else if (daysInterval >= 1) {
            value = ~~daysInterval;
            label = _intl.dayLabel;
        } else if (hoursInterval >= 1) {
            value = ~~hoursInterval;
            label = _intl.hourLabel;
        } else if (minutesInterval >= 1) {
            value = ~~minutesInterval;
            label = _intl.minuteLabel;
        } else {
            value = ~~secondsInterval;
            label = _intl.secondLabel;
        }

        return { value, label };
    }
}
