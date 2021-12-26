import {Component, OnInit} from '@angular/core';
import {CalculatorService} from "../../services/calculator.service";

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.scss']
})
export class CalculatorComponent implements OnInit {

  private _value: string = '';
  get value(): string {
    return this._value || '0';
  }

  set value(value: string) {
    this._value += value;
  }

  constructor(
    private calcService: CalculatorService
  ) {
  }

  ngOnInit(): void {
  }

  setValue(value: string): void {
    this.value = value;
  }

  allClear(): void {
    this._value = '';
  }

  calculate(): void {

  }
}
