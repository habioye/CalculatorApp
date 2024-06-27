import { Component } from '@angular/core';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrl: './calculator.component.scss'
})
export class CalculatorComponent {
  displayarr: string[] = [];
  display = '0';
  operator = '';
  displayarr2: string[] = [];
  first = true;
  state = 1;
  public addnumber(input:string): void {
    switch(this.state) {
      case 1:
        break;
        case 2:
          break;
        case 3:
          break;
        
    }
    // console.log("qwert out");
    // if (this.first) {
    // this.displayarr.push(input);
    // this.display = this.displayarr.join("");
    // } else {
    //   this.displayarr2.push(input);
    // this.display = this.displayarr2.join("");
    // }

  }
  operate(input:string): void {
    if (this.operator == '') { // adding first operator
    this.operator = input;
    this.first = !this.first;
    } else { // chaining operators
      this.evaluate();
      this.operator = '';
      this.displayarr = []
    }
  }
  evaluate():void {
    try{
    this.display = eval(this.displayarr.join("")+this.operator+this.displayarr2.join("")).toString();
    } catch (error) {
      this.display = "Invalid Expression";
    }

  }

  

}
