import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'translateCut'
})
export class NgxTranslateCutPipe implements PipeTransform {
  public transform(value: string, index: string | number): string {
    const cutIndex = Number(index);
    return value.split('|')[cutIndex] || '';
  }
}
