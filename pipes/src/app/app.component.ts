import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  name: string;
  date: string;
  amount: number;
  height: number;
  miles: number;

  car = {
    make: 'vinfast',
    model: 'oto',
    year: 2020
  }

  onChangeName(value: string) {
    this.name = value;
  }

  onDateChange(value: string) {
    this.date = value;
  }

  onAmountChange(value: string) {
    this.amount = parseInt(value);
  }

  onChangeHeight(value: string) {
    this.height = parseInt(value);
  }
  onChangeMiles(value: string) {
    this.miles = parseInt(value);
  }
}
