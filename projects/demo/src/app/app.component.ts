import { Component } from '@angular/core';
import { VERSION } from '../environments/version';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
    standalone: false
})
export class AppComponent {
  public version = VERSION;
}
