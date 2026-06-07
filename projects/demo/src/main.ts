import { enableProdMode, importProvidersFrom, provideZonelessChangeDetection } from '@angular/core';

import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
import { BrowserModule, bootstrapApplication } from '@angular/platform-browser';
import { TranslateModule } from '@ngx-translate/core';
import { provideTranslateHttpLoader } from '@ngx-translate/http-loader';
import { provideNgxTranslateCut } from '../../ngx-translate-cut/src/lib/ngx-translate-cut.options.service';
import { AppComponent } from './app/app.component';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}

bootstrapApplication(AppComponent, {
  providers: [
    importProvidersFrom(
      TranslateModule.forRoot({
        loader: provideTranslateHttpLoader({ prefix: './assets/i18n/', suffix: '.json' }),
      }),
      BrowserModule,
    ),
    provideNgxTranslateCut({
      // Pipe `|` is default option. It's just for show and play :)
      // If you don't need to change the separator, you don't have to use it at all.
      separator: '|',
    }),
    provideHttpClient(withInterceptorsFromDi()),
    provideZonelessChangeDetection(),
  ],
}).catch((err) => console.error(err));
