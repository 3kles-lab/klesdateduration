import { TranslateService } from "@ngx-translate/core";
import { DateDurationIntl, ILabel } from "dist/kles-date-duration";

export class DateDurationI18n {
    dateDurationIntl: DateDurationIntl;

    constructor(private translate: TranslateService) {


    }

    getDateDurationIntl(): DateDurationIntl {
        this.dateDurationIntl = new DateDurationIntl();

        this.dateDurationIntl.dayLabel = {
            plural: this.translate.instant('days'),
            singular: this.translate.instant('day'),
        };

        this.dateDurationIntl.monthLabel = {
            plural: this.translate.instant('months'),
            singular: this.translate.instant('month'),
        };

        this.dateDurationIntl.yearLabel = {
            plural: this.translate.instant('years'),
            singular: this.translate.instant('year'),
        };

        this.dateDurationIntl.hourLabel = {
            plural: this.translate.instant('hours'),
            singular: this.translate.instant('hour'),
        };

        this.dateDurationIntl.minuteLabel = {
            plural: this.translate.instant('minutes'),
            singular: this.translate.instant('minute'),
        };

        this.dateDurationIntl.secondLabel = {
            plural: this.translate.instant('seconds'),
            singular: this.translate.instant('second'),
        };

        this.dateDurationIntl.formatSince = this.formatSince.bind(this);
        this.dateDurationIntl.formatAgo = this.formatAgo.bind(this);

        return this.dateDurationIntl;
    }

    formatSince(value: number, label: ILabel): string {
        return this.translate.instant('since', { value, unit: value > 1 ? label.plural : label.singular })
    }

    formatAgo(value: number, label: ILabel): string {
        return this.translate.instant('ago', { value, unit: value > 1 ? label.plural : label.singular })
    }

}