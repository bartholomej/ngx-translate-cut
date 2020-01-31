import { Pipe, PipeTransform } from '@angular/core';

const SEPARATOR = '|';

@Pipe({
  name: 'translateCut'
})
export class NgxTranslateCutPipe implements PipeTransform {
  public transform(value: string, index: number): string {
    const cutIndex = Number(index);
    const splitted: string[] = value ? value.split(SEPARATOR) : null;
    const phrase: string = splitted ? splitted[cutIndex] : null;
    const result = phrase ? phrase.trim() : '';

    return result;
  }
}
