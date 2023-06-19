import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { ProductCardComponent } from './products/product-card/product-card.component';
import { ProductListComponent } from './products/product-list/product-list.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { SellingService } from './services/selling.service';

@NgModule({
  declarations: [
    AppComponent,
    ProductCardComponent,
    ProductListComponent,
    NavBarComponent,
  ],
  imports: [BrowserModule, HttpClientModule],
  providers: [SellingService],
  bootstrap: [AppComponent],
})
export class AppModule {}
