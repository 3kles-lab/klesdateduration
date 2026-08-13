import { HttpClient, provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
import { registerLocaleData } from '@angular/common';
import localeFr from '@angular/common/locales/fr';
import { APP_INITIALIZER, ApplicationConfig, importProvidersFrom } from '@angular/core';
import { TranslateLoader, TranslateModule, TranslateService } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { DateDurationIntl } from 'dist/kles-date-duration';
import { DateDurationI18n } from './date-duration-I18n';

registerLocaleData(localeFr);

export function httpLoaderFactory(http: HttpClient): TranslateHttpLoader {
    return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

export function initializeTranslations(translateService: TranslateService): () => Promise<void> {
    return () => new Promise<void>((resolve, reject) => {
        translateService.setDefaultLang('fr');
        translateService.use('fr').subscribe({
            next: () => resolve(),
            error: error => reject(error)
        });
    });
}

export function dateDurationIntlFactory(translateService: TranslateService): DateDurationIntl {
    return new DateDurationI18n(translateService).getDateDurationIntl();
}

export const appConfig: ApplicationConfig = {
    providers: [
        importProvidersFrom(TranslateModule.forRoot({
            defaultLanguage: 'fr',
            useDefaultLang: true,
            loader: {
                provide: TranslateLoader,
                useFactory: httpLoaderFactory,
                deps: [HttpClient]
            }
        })),
        provideHttpClient(withInterceptorsFromDi()),
        {
            provide: APP_INITIALIZER,
            useFactory: initializeTranslations,
            deps: [TranslateService],
            multi: true
        },
        {
            provide: DateDurationIntl,
            useFactory: dateDurationIntlFactory,
            deps: [TranslateService]
        }
    ]
};
