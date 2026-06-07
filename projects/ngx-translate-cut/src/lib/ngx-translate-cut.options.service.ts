import {
  EnvironmentProviders,
  inject,
  Injectable,
  InjectionToken,
  makeEnvironmentProviders,
} from '@angular/core';
import { SEPARATOR } from './ngx-translate-cut.constants';
import { NgxTranslateCutOptions } from './ngx-translate-cut.options.interface';

export const NGX_TRANSLATE_CUT_OPTIONS = new InjectionToken<NgxTranslateCutOptions>(
  'NgxTranslateCutOptions',
);

@Injectable({
  providedIn: 'root',
  useFactory: () => {
    const options = inject<NgxTranslateCutOptions>(NGX_TRANSLATE_CUT_OPTIONS, { optional: true });
    const service = new NgxTranslateCutOptionsService();
    if (options) {
      if (options.separator) {
        service.separator = options.separator;
      }
      if (options.trim !== undefined) {
        service.trim = options.trim;
      }
    }
    return service;
  },
})
export class NgxTranslateCutOptionsService {
  /**
   * @returns separator – can be custom or predefined
   */
  public separator: string = SEPARATOR;
  /**
   * @returns trim – trim or not to trim, that is the question
   */
  public trim = true;
}

export function provideNgxTranslateCut(options?: NgxTranslateCutOptions): EnvironmentProviders {
  return makeEnvironmentProviders([
    {
      provide: NGX_TRANSLATE_CUT_OPTIONS,
      useValue: options,
    },
  ]);
}
