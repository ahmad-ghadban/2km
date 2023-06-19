import { Component, OnInit } from '@angular/core';
import { SellingService } from 'src/app/services/selling.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
})
export class ProductListComponent implements OnInit {
  Products!: any;

  constructor(private sellingService: SellingService) {}

  ngOnInit() {
    this.sellingService.getAllProducts().subscribe(
      (data) => {
        this.Products = data;
      },
      (error) => {
        console.log(error);
      }
    );
  }
}
