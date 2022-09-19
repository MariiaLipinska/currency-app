import { Component, OnInit } from '@angular/core';
import { CurrencyapidataService } from '../currencyapidata.service';

@Component({
  selector: 'input-component',
  templateUrl: "./input.component.html",
  styleUrls: ['./input.component.css']
})
export class InputComponent implements OnInit{
  country: any = [];
  currjson: any = [];
  amount1:number = 1;
  amount2:number = 1;
  currency1:string = "USD";
  currency2:string = "USD";
  base = "UAH";
  rates = [];
  
  handleAmountChange(amount1: number) {
    this.amount2 = this.amount1 * this.rates[this.currency2] / this.rates[this.currency1];
    this.amount2 = +(this.amount2).toFixed(4);
    this.amount1 = amount1;
  }
    onAmountChange(event: any) {
    this.amount1 = event.target.value
    this.handleAmountChange(this.amount1)
  }
  handleAmount2Change(amount2: number) {
    this.amount1 = this.amount2 * this.rates[this.currency1] / this.rates[this.currency2];
    this.amount1 =  +(this.amount1).toFixed(4);
    this.amount2 = amount2;
  }
  onAmountChange2(event: any) {
    this.amount2 = event.target.value
    this.handleAmount2Change(this.amount2)
  }
 

  handleCurrencyChange(currency1:string) {
    this.amount2 = this.amount1 * this.rates[this.currency2] / this.rates[this.currency1];
    this.amount2 = +(this.amount2).toFixed(4);
    this.currency1 = currency1;
  }
  onCurrencyChange(currency: string) {
    this.currency1 = currency;
    this.handleCurrencyChange(this.currency1)
  }
  handleCurrency2Change(currency2:string) {
    this.amount1 = this.amount2 * this.rates[this.currency1] / this.rates[currency2];
    this.amount1= +(this.amount1).toFixed(4);
    this.currency2 = currency2;
  }
  onCurrencyChange2(currency: string) {
    this.currency2 = currency;
    this.handleCurrency2Change(this.currency2);
  }

  constructor(private currency: CurrencyapidataService){}

  ngOnInit() {
    this.currency.getcurrencydata(this.base).subscribe((data) => {
      console.log(data);
      this.currjson = JSON.stringify(data);
      this.currjson = JSON.parse(this.currjson);
      this.rates = this.currjson.rates;
      })
  }
}