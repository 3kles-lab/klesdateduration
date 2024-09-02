import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { DateSincePipe } from './pipes/date-since.pipe';
import { DateAgoPipe } from './pipes/date-ago.pipe';
import { KLES_DATE_DURATION_INTL_PROVIDER } from './date-duration-intl';


@NgModule({
  declarations: [DateSincePipe, DateAgoPipe],
  imports: [
    CommonModule
  ],
  providers: [KLES_DATE_DURATION_INTL_PROVIDER],
  exports: [DateSincePipe, DateAgoPipe]
})
export class KlesDateDurationModule { }
