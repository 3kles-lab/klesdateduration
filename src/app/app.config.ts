import { HttpClient, provideHttpClient, withInterceptorsFromDi, withXhr } from '@angular/common/http';
import { registerLocaleData } from '@angular/common';
import localeFr from '@angular/common/locales/fr';
import { ApplicationConfig, importProvidersFrom, inject, provideAppInitializer } from '@angular/core';
import { TranslateLoader, TranslateModule, TranslateService } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { DateDurationIntl } from 'kles-date-duration';
import { Observable } from 'rxjs';
import { DateDurationI18n } from './date-duration-I18n';

registerLocaleData(localeFr);

export function httpLoaderFactory(http: HttpClient): TranslateHttpLoader {
    return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

export function initializeTranslations(translateService: TranslateService): () => Observable<unknown> {
    return () => {
        translateService.setDefaultLang('fr');
        return translateService.use('fr');
    };
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
        provideHttpClient(withXhr(), withInterceptorsFromDi()),
        provideAppInitializer(() => {
            const initializerFn = (initializeTranslations)(inject(TranslateService));
            return initializerFn();
        }),
        {
            provide: DateDurationIntl,
            useFactory: dateDurationIntlFactory,
            deps: [TranslateService]
        }
    ]
};
