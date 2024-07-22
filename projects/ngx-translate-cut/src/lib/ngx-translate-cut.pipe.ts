import { Pipe, PipeTransform } from '@angular/core';
import { SEPARATOR } from './ngx-translate-cut.constants';
import { NgxTranslateCutOptionsService } from './ngx-translate-cut.options.service';

@Pipe({
  name: 'translateCut',
})
export class NgxTranslateCutPipe implements PipeTransform {
  constructor(private options?: NgxTranslateCutOptionsService) {}

  public transform(value: string, index: number): string {
    const cutIndex = Number(index);
    const splitted: string[] = value ? value.split(this.options?.separator || SEPARATOR) : null;
    const phrase: string = splitted ? splitted[cutIndex] : null;
    const result = phrase ? (this.options?.trim ? phrase.trim() : phrase) : '';

    return result;
  }
}
