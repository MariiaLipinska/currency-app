import { Component, OnInit } from '@angular/core';
import { CurrencyapidataService } from '../../currencyapidata.service';

@Component({
  selector: 'input-component',
  templateUrl: "./input.component.html",
  styleUrls: ['./input.component.css']
})
export class InputComponent implements OnInit{
  currjson: any ={};
  amount1:number = 1;
  amount2:number = 1;
  currency1:string = "USD";
  currency2:string = "USD";
  base: string = "UAH";
  rates:string[] = [];
  
  handleAmountChange(amount1: number, currency1: string ) {
    this.currency1 = currency1;
    this.amount1 = amount1;
    this.amount2 = this.amount1 * this.rates[this.currency2] / this.rates[currency1];
    this.amount2 = +(this.amount2).toFixed(4);
  }

  handleAmount2Change(amount2: number, currency2: string) {
    this.amount2 = amount2;
    this.currency2 = currency2;
    this.amount1 = this.amount2 * this.rates[this.currency1] / this.rates[currency2];
    this.amount1 = +(this.amount1).toFixed(4);
  }
 
  constructor(private currency: CurrencyapidataService){}

  ngOnInit() {
    this.currency.getcurrencydata(this.base).subscribe((data) => {
      console.log(data);
      this.currjson = data;
      this.rates = this.currjson.rates;
      })
  }
}