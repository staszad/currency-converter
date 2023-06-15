import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import currencies from 'src/res/currencies';

@Component({
  selector: 'app-main-input',
  templateUrl: './main-input.component.html',
  styleUrls: ['./main-input.component.css'],
})
export class MainInputComponent implements OnInit {
  constructor() {}

  currencies = currencies;
  currency = currencies[0];
  @Input() currency1 = currencies[0];
  @Input() currency2 = currencies[1];
  @Output() changeAmount = new EventEmitter<number>();
  @Output() changeCurrency = new EventEmitter<string>();
  amount1 = 1;

  ngOnInit(): void {}
}
