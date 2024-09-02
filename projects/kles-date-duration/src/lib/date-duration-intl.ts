import { Injectable, Optional, SkipSelf } from '@angular/core';
import { ILabel } from './interfaces/label.interface';

@Injectable({ providedIn: 'root' })
export class DateDurationIntl {
  sinceLabel: string = 'Since';
  agoLabel: string = 'ago';

  yearLabel: ILabel = {
    singular: 'year',
    plural: 'years'
  };

  monthLabel: ILabel = {
    singular: 'month',
    plural: 'months'
  };

  dayLabel: ILabel = {
    singular: 'day',
    plural: 'days'
  };
  hourLabel: ILabel = {
    singular: 'hour',
    plural: 'hours'
  };

  minuteLabel: ILabel = {
    singular: 'minute',
    plural: 'minutes'
  };

  secondLabel: ILabel = {
    singular: 'second',
    plural: 'seconds'
  };

  public formatSince(value: number, label: ILabel): string {
    return `${this.sinceLabel} ${value} ${value > 1 ? label.plural : label.singular}`;
  }

  public formatAgo(value: number, label: ILabel): string {
    return `${value} ${value > 1 ? label.plural : label.singular} ${this.agoLabel} `;
  }
}

/** @docs-private */
export function KLES_DATE_DURATION_INTL_PROVIDER_FACTORY(parentIntl: DateDurationIntl) {
  return parentIntl || new DateDurationIntl();
}

/** @docs-private */
export const KLES_DATE_DURATION_INTL_PROVIDER = {
  provide: DateDurationIntl,
  deps: [[new Optional(), new SkipSelf(), DateDurationIntl]],
  useFactory: KLES_DATE_DURATION_INTL_PROVIDER_FACTORY,
};
