import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { ProductCardComponent } from './products/product-card/product-card.component';
import { ProductListComponent } from './products/product-list/product-list.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { SellingService } from './services/selling.service';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { ProductDetailComponent } from './products/product-detail/product-detail.component';

const appRoutes: Routes = [
  { path: 'about-us', component: AboutComponent },
  { path: '', component: ProductListComponent },
  { path: 'product-detail/:id', component: ProductDetailComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    ProductCardComponent,
    ProductListComponent,
    NavBarComponent,
    AboutComponent,
    ProductDetailComponent,
  ],
  imports: [BrowserModule, HttpClientModule, RouterModule.forRoot(appRoutes)],
  providers: [SellingService],
  bootstrap: [AppComponent],
})
export class AppModule {}
