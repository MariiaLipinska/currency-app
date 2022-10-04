import { Component, OnInit, forwardRef } from '@angular/core';
import { CurrencyapidataService } from '../../servises/currencyapidata.service';
import {FormGroup, FormControl, ControlValueAccessor, NG_VALUE_ACCESSOR} from "@angular/forms"

@Component({
  selector: 'input-component',
  templateUrl: "./input.component.html",
  styleUrls: ['./input.component.css'],
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef (()=>InputComponent),
    multi: true,
  }]
})
export class InputComponent implements OnInit, ControlValueAccessor{
  currjson: any ={};
  amount1:number = 1;
  amount2:number = 1;
  currency1:string = "USD";
  currency2:string = "USD";
  base: string = "UAH";
  rates: string[] = [];
  changed: Function = () =>  void{};
  touched: Function = () =>  void{};
   
  currencyConventerForm = new FormGroup({
    amount1: new FormControl(this.amount1),
    currency1: new FormControl(this.currency1),
    amount2: new FormControl(this.amount2),
    currency2: new FormControl(this.currency2),
  })
  

  writeValue(value: number): void {
    this.amount1 = value;
    this.amount2 = value;
  }
  onChange(amount1: number, currency1: string) {
    this.currency1 = currency1;
    this.amount1 = amount1;
    this.amount2 = this.amount1 * this.rates[this.currency2] / this.rates[currency1];
    this.amount2 = +(this.amount2).toFixed(4);
    this.changed(this.amount1);
    this.changed(this.currency1);
  }
  onChange2(amount2: number, currency2: string) {
    this.currency2 = currency2;
    this.amount2 = amount2;
    this.amount1 = this.amount2 * this.rates[this.currency1] / this.rates[currency2];
    this.amount1 = +(this.amount1).toFixed(4);
    this.changed(this.amount2);
    this.changed(this.currency2);
  }
  registerOnChange(fn: any): void {
    this.changed = fn;
  }
  registerOnTouched(fn: any): void {
     this.touched = fn
  }
  // handleAmountChange(amount1: number, currency1: string) {
  //      this.currency1 = currency1;
  //      this.amount1 = amount1;
  //      this.amount2 = this.amount1 * this.rates[this.currency2] / this.rates[currency1];
  //      this.amount2 = +(this.amount2).toFixed(4);
  // }

  // handleAmount2Change(amount2: number, currency2: string) {
  //      this.amount2 = amount2;
  //      this.currency2 = currency2;
  //      this.amount1 = this.amount2 * this.rates[this.currency1] / this.rates[currency2];
  //      this.amount1 = +(this.amount1).toFixed(4);
  // }
 
  constructor(private currency: CurrencyapidataService){}

  ngOnInit() {
    this.currency.getcurrencydata(this.base).subscribe((data) => {
      console.log(data);
      this.currjson = data;
      this.rates = this.currjson.rates;
      })
  }
}