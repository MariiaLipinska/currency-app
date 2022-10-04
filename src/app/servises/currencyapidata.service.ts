import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http"

@Injectable({
  providedIn: 'root'
})
export class CurrencyapidataService {
  
  constructor(private http: HttpClient) {}

  getcurrencydata(country: string) {
    let url = "https://api.exchangerate.host/latest?base=" +country+"&symbols=UAH,USD,EUR";
    return this.http.get(url)
  }
}
