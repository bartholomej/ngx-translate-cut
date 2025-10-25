import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
import { NgModule, provideZonelessChangeDetection } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { provideTranslateHttpLoader } from '@ngx-translate/http-loader';
import { NgxTranslateCutModule } from 'projects/ngx-translate-cut/src/lib/ngx-translate-cut.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [
    TranslateModule.forRoot({
      loader: provideTranslateHttpLoader({ prefix: './assets/i18n/', suffix: '.json' }),
    }),
    BrowserModule,
    NgxTranslateCutModule.forRoot({
      // Pipe `|` is default option. It's just for show and play :)
      // If you don't need to change the separator, you don't have to use it at all.
      // Just import module. Without any `forRoot` methods.
      separator: '|',
    }),
  ],
  providers: [provideHttpClient(withInterceptorsFromDi()), provideZonelessChangeDetection()],
  bootstrap: [AppComponent],
})
export class AppModule {
  constructor(private translate: TranslateService) {
    this.translate.addLangs(['en']);
    this.translate.use('en');
  }
}
