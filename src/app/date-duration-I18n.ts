import { TranslateService } from "@ngx-translate/core";
import { DateDurationIntl, ILabel } from "kles-date-duration";

export class DateDurationI18n {
    constructor(private translate: TranslateService) { }

    getDateDurationIntl(): DateDurationIntl {
        const dateDurationIntl = new DateDurationIntl();

        dateDurationIntl.dayLabel = {
            plural: this.translate.instant('days'),
            singular: this.translate.instant('day'),
        };

        dateDurationIntl.monthLabel = {
            plural: this.translate.instant('months'),
            singular: this.translate.instant('month'),
        };

        dateDurationIntl.yearLabel = {
            plural: this.translate.instant('years'),
            singular: this.translate.instant('year'),
        };

        dateDurationIntl.hourLabel = {
            plural: this.translate.instant('hours'),
            singular: this.translate.instant('hour'),
        };

        dateDurationIntl.minuteLabel = {
            plural: this.translate.instant('minutes'),
            singular: this.translate.instant('minute'),
        };

        dateDurationIntl.secondLabel = {
            plural: this.translate.instant('seconds'),
            singular: this.translate.instant('second'),
        };

        dateDurationIntl.formatSince = this.formatSince.bind(this);
        dateDurationIntl.formatAgo = this.formatAgo.bind(this);

        return dateDurationIntl;
    }

    formatSince(value: number, label: ILabel): string {
        return this.translate.instant('since', { value, unit: value > 1 ? label.plural : label.singular })
    }

    formatAgo(value: number, label: ILabel): string {
        return this.translate.instant('ago', { value, unit: value > 1 ? label.plural : label.singular })
    }
}
