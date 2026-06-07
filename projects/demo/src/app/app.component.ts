import { Component, inject } from '@angular/core';
import { TranslatePipe, TranslateService } from '@ngx-translate/core';
import { NgxTranslateCutPipe } from '../../../ngx-translate-cut/src/lib/ngx-translate-cut.pipe';
import { VERSION } from '../environments/version';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  imports: [TranslatePipe, NgxTranslateCutPipe],
})
export class AppComponent {
  private translate = inject(TranslateService);

  public version = VERSION;

  constructor() {
    this.translate.addLangs(['en']);
    this.translate.use('en');
  }
}
