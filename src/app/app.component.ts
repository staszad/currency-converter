import { Component } from '@angular/core';
import currencies from 'src/res/currencies';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'currency-converer-new';
  currency1 = currencies[0];
  currency2 = currencies[1];
}
