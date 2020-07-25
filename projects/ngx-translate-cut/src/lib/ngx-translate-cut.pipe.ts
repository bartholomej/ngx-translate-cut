import { Pipe, PipeTransform } from '@angular/core';
import { NgxTranslateCutOptionsService } from './ngx-translate-cut.options.service';

@Pipe({
  name: 'translateCut',
})
export class NgxTranslateCutPipe implements PipeTransform {
  constructor(private options: NgxTranslateCutOptionsService) {}

  public transform(value: string, index: number): string {
    const cutIndex = Number(index);
    const splitted: string[] = value ? value.split(this.options.separator) : null;
    const phrase: string = splitted ? splitted[cutIndex] : null;
    const result = phrase ? phrase.trim() : '';

    return result;
  }
}
