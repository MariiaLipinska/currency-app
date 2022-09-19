import { Component, OnInit } from '@angular/core';
import { CurrencyapidataService } from '../currencyapidata.service';

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
  currjson: any = [];
  constructor(private currency: CurrencyapidataService){}

  ngOnInit() {
    this.currency.getcurrencydata(this.base).subscribe((data) => {
      console.log(data)
      this.currjson = JSON.stringify(data);
      this.currjson = JSON.parse(this.currjson);
      this.result = +(this.currjson.rates.UAH).toFixed(4);
    })
    this.currency.getcurrencydata(this.base2).subscribe((data) => {
      console.log(data)
      this.currjson = JSON.stringify(data);
      this.currjson = JSON.parse(this.currjson);
      this.result2 = +(this.currjson.rates.UAH).toFixed(4);
      })
  }
}