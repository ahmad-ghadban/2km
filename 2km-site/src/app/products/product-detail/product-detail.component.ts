import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SellingService } from 'src/app/services/selling.service';
import { ProductCardComponent } from '../product-card/product-card.component';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css'],
})
export class ProductDetailComponent implements OnInit {
  public productId: number;
  product: any;
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private sellingService: SellingService
  ) {}

  ngOnInit() {
    this.productId = this.route.snapshot.params['id'];

    this.route.params.subscribe((params) => {
      this.productId = +params['id'];
      this.sellingService.getAllProducts().subscribe(
        (data: any) => {
          this.product = data[this.productId - 1];
          if (this.product === undefined) {
            this.router.navigate(['/']);
          }
          console.error(this.product);
        },
        (error) => this.router.navigate(['/'])
      );
    });
  }
}
