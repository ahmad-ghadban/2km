import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css']
})
export class ProductCardComponent implements OnInit {
  Product: any = {
    "Id": 1,
    "Code": "2KM0001",
    "Size": "small",
    "Price": 120
  }

  constructor() { }

  ngOnInit() {
  }

}
