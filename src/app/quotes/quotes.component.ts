import { Quote } from './../models/quotes.model';
import { Component, OnInit } from '@angular/core';
import { QUOTES } from '../models/mock-quotes.model';


@Component({
  selector: 'app-quotes',
  templateUrl: './quotes.component.html',
  styleUrls: ['./quotes.component.css']
})
export class QuotesComponent implements OnInit {
  quotes = QUOTES;
  selectedQuote?: Quote;
clickCounter: number = 0;
clickCounter1: number = 0;

  constructor() { }

  ngOnInit(): void {
  }

  onSelect(quote: Quote): void {
    this.selectedQuote = quote;
  }
countClick(){
  this.clickCounter += 1;
}
countClick1(){
  this.clickCounter1 += 1;
}

}