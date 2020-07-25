import { Injectable } from '@angular/core';
import { SEPARATOR } from './ngx-translate-cut.constants';

@Injectable()
export class NgxTranslateCutOptionsService {
  /**
   * @returns separator – can be custom or predefined
   */
  public separator: string = SEPARATOR;
}
