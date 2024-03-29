import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class SellingService {
  constructor(private http: HttpClient) {}

  getAllProducts() {
    return this.http.get('data/products.json');
  }
}
