import { NgxTranslateCutOptions } from './ngx-translate-cut.options.interface';
import { NgxTranslateCutOptionsService } from './ngx-translate-cut.options.service';

export const ngxTranslateCutOptionsFactory = (
  options?: NgxTranslateCutOptions,
): NgxTranslateCutOptionsService => {
  const ngxTranslateCutOptionsService = new NgxTranslateCutOptionsService();

  if (options) {
    if (options.separator) {
      ngxTranslateCutOptionsService.separator = options.separator;
    }
    if (options.trim) {
      ngxTranslateCutOptionsService.trim = options.trim;
    }
  }
  return ngxTranslateCutOptionsService;
};
