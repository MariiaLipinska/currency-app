import { Component, OnInit } from '@angular/core';
import { CurrencyapidataService } from '../../servises/currencyapidata.service';


@Component({
  selector: 'header-component',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit{
  base: string = "USD";
  base2: string = "EUR";
  result: number = 1;
  result2: number = 1;
  rates: string[] = [];
  currjson: any = {};
  constructor(private currency: CurrencyapidataService){}

  ngOnInit() {
    this.currency.getcurrencydata(this.base).subscribe((data) => {
      console.log(data);
      this.currjson = data;
      this.rates = this.currjson.rates;
      this.result = +(this.currjson.rates.UAH).toFixed(4);
    })
    this.currency.getcurrencydata(this.base2).subscribe((data) => {
      console.log(data);
      this.currjson = data;
      this.rates = this.currjson.rates;
      this.result2 = +(this.currjson.rates.UAH).toFixed(4);
      })
  }
}