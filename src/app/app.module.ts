import { BrowserModule } from '@angular/platform-browser';
import { APP_INITIALIZER, LOCALE_ID, NgModule, Optional, SkipSelf } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';

import { HttpClient, provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
import localeFr from '@angular/common/locales/fr';
import { CommonModule, registerLocaleData } from '@angular/common';
import { DateDurationIntl, KlesDateDurationModule } from 'dist/kles-date-duration';
import { DateDurationI18n } from './date-duration-I18n';
import { TranslateLoader, TranslateModule, TranslateService } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

registerLocaleData(localeFr);
@NgModule({ declarations: [
        AppComponent
    ],
    bootstrap: [AppComponent], imports: [CommonModule,
        BrowserModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        KlesDateDurationModule,
        TranslateModule.forRoot({
            defaultLanguage: 'fr',
            useDefaultLang: true,
            loader: {
                provide: TranslateLoader,
                useFactory: (HttpLoaderFactory),
                deps: [HttpClient]
            }
        })], providers: [
        {
            provide: APP_INITIALIZER,
            useFactory: startupServiceFactory,
            deps: [TranslateService],
            multi: true
        },
        {
            provide: DateDurationIntl,
            deps: [TranslateService],
            useFactory: (translateService: TranslateService) => new DateDurationI18n(translateService).getDateDurationIntl()
        },
        provideHttpClient(withInterceptorsFromDi()),
    ] })
export class AppModule {

}

export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

export function startupServiceFactory(translateService: TranslateService) {
  return async () => {
    translateService.setDefaultLang('fr');
    translateService.use('fr');
    return new Promise<void>(resolve => {
      translateService.onLangChange.subscribe(() => {
        resolve();
      });
    });
  };
}
