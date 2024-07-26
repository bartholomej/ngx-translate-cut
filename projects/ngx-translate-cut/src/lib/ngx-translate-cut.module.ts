import { InjectionToken, ModuleWithProviders, NgModule } from '@angular/core';
import { ngxTranslateCutOptionsFactory } from './ngx-translate-cut.options.factory';
import { NgxTranslateCutOptions } from './ngx-translate-cut.options.interface';
import { NgxTranslateCutOptionsService } from './ngx-translate-cut.options.service';
import { NgxTranslateCutPipe } from './ngx-translate-cut.pipe';

export let FOR_ROOT_OPTIONS_TOKEN = new InjectionToken<NgxTranslateCutOptions>(
  'forRoot() NgxTranslateCutOptionsService configuration.',
);

@NgModule({
  imports: [NgxTranslateCutPipe],
  exports: [NgxTranslateCutPipe],
})
export class NgxTranslateCutModule {
  public static forRoot(
    options?: NgxTranslateCutOptions,
  ): ModuleWithProviders<NgxTranslateCutModule> {
    return {
      ngModule: NgxTranslateCutModule,
      providers: [
        {
          provide: FOR_ROOT_OPTIONS_TOKEN,
          useValue: options,
        },
        {
          provide: NgxTranslateCutOptionsService,
          useFactory: ngxTranslateCutOptionsFactory,
          deps: [FOR_ROOT_OPTIONS_TOKEN],
        },
      ],
    };
  }
}
