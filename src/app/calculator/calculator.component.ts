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
  invalidexpression = false;
  public addnumber(input:string): void {
    this.invalidexpression = false;
    switch(this.state) {
      case 1:
        this.state = 2;
        this.displayarr = [];
        this.displayarr2 = [];
        this.displayarr.push(input);
        this.display = this.displayarr.join("");
        break;
      case 2:
        this.displayarr.push(input);
        this.display = this.displayarr.join("");
        break;
      case 3:
        this.state = 4;
        this.displayarr2.push(input);
        this.display = this.displayarr2.join("");
        break;
      case 4:
        this.displayarr2.push(input);
        this.display = this.displayarr2.join("");
        break;
      case 5:
        this.state = 2;
        this.display = input;
        this.displayarr = [input];
        this.displayarr2 = [];

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
    if (this.invalidexpression) return;
    this.operator = input;
    // if (this.state == 1) {
    //   this.displayarr = ['0'];
    // }
    // this.state = 3;
    switch(this.state) {
      case 1:
        this.state = 3;
        this.displayarr = ['0'];
        

        break;
      case 2:
        this.state = 3

        break;
      case 3:
        break;
      case 4:
        this.evaluate();
        if (this.display == "Invalid Expression") {
          this.state = 2;
          this.displayarr = [];

        }
        this.operate(this.operator);
            // try{
    // this.display = eval(this.displayarr.join("")+this.operator+this.displayarr2.join("")).toString();
    // } catch (error) {
    //   this.display = "Invalid Expression";
    // }
        break;
      case 5:

        break;
      
    }
    // if (this.operator == '') { // adding first operator
    // this.operator = input;
    // this.first = !this.first;
    // } else { // chaining operators
    //   this.evaluate();
    //   this.operator = '';
    //   this.displayarr = []
    // }
  }
  evaluate():void {
    if (this.invalidexpression) return;
    switch(this.state) {
      case 1:
        this.state = 1;
        this.displayarr = [];
        this.displayarr2 = [];
        // this.display = this.displayarr.join("");
        this.display = '0';
        break;
      case 2:
        this.state = 5;
        this.operator = "+";
        this.displayarr2 = ['0'];
        break;
      case 3:
        this.state = 5;
        this.displayarr2 = Object.assign([],this.displayarr);
        try {
          this.display = eval(this.displayarr.join("")+this.operator+this.displayarr2.join(""));
        } catch(error) {
          this.display = "Invalid Expression";
        }
        break;
      case 4:
        this.state = 5;
        try {
          this.display = eval(this.displayarr.join("")+this.operator+this.displayarr2.join(""));
        } catch(error) {
          this.display = "Invalid Expression";
        }
        break;
      case 5:
        try {
          this.display = eval(this.display+this.operator+this.displayarr2.join(""));
        } catch(error) {
          this.display = "Invalid Expression";
        }
        break;
      
    }
    // try{
    // this.display = eval(this.displayarr.join("")+this.operator+this.displayarr2.join("")).toString();
    // } catch (error) {
    //   this.display = "Invalid Expression";
    // }

  }

  

}
