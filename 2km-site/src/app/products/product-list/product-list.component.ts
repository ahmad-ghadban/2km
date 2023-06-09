import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
})
export class ProductListComponent implements OnInit {
  Products: Array<any> = [
    {
      Id: 1,
      Code: '2KM0001',
      Size: 'small',
      Price: 120,
    },
    {
      Id: 2,
      Code: '2KM0002',
      Size: 'small',
      Price: 130,
    },
    {
      Id: 3,
      Code: '2KM0003',
      Size: 'small',
      Price: 140,
    },
    {
      Id: 4,
      Code: '2KM0004',
      Size: 'small',
      Price: 140,
    },
    {
      Id: 5,
      Code: '2KM0005',
      Size: 'small',
      Price: 150,
    },
    {
      Id: 6,
      Code: '2KM0006',
      Size: 'small',
      Price: 180,
    },
  ];

  constructor() {}

  ngOnInit() {}
}
