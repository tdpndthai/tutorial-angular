import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  length = 0;
  includeLetter = false;
  includeNumber = false;
  includeSymbols = false;
  password = '';

  // constructor() {
  //   this.password =''
  // }

  onChangeUseLetters() {
    this.includeLetter = !this.includeLetter;
  }
  onChangeUseNumbers() {
    this.includeNumber = !this.includeNumber;
  }
  onChangeUseSymbols() {
    this.includeSymbols = !this.includeSymbols;
  }

  onChangeLenght(value: string) {
    const parsedValue = parseInt(value);
    if (!isNaN(parsedValue)) {
      this.length = parsedValue
    }
  }

  onButtonClick() {
    //console.log('Button was clicked');
    //this.password = 'My password';
    const number = '123456789';
    const letters = 'abcdefghijklmnopqrstuvwyz';
    const symbols = '!@#$%^&*()';
    let validChars = '';
    if (this.includeLetter) {
      validChars += letters
    }
    if (this.includeNumber) {
      validChars += number
    }
    if (this.includeSymbols) {
      validChars += symbols
    }

    let generatedPassword = '';
    for (let i = 0; i < this.length; i++) {
      const index = Math.floor(Math.random() * validChars.length);
      generatedPassword += validChars[index];
    }
    this.password = generatedPassword;
  }

  getPassword() {
    return this.password;
  }
  getName() {
    return 'Alex'
  }
} 
