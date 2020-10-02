import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SliderComponent } from './slider/slider.component';
import { CategoryAreaComponent } from './category-area/category-area.component';
import { LatestProductComponent } from './latest-product/latest-product.component';
import { BestProductComponent } from './best-product/best-product.component';
import { BestCollectionComponent } from './best-collection/best-collection.component';
import { LatestOffersComponent } from './latest-offers/latest-offers.component';
import { ShopMethodComponent } from './shop-method/shop-method.component';
import { GalleryComponent } from './gallery/gallery.component';
import { HomeComponent } from './home.component';
import { HomeRoutingModule } from './home-routing.module';



@NgModule({
  declarations: [SliderComponent, CategoryAreaComponent, LatestProductComponent, BestProductComponent, BestCollectionComponent, LatestOffersComponent, ShopMethodComponent, GalleryComponent, HomeComponent],
  imports: [
    CommonModule,
    HomeRoutingModule
  ]
})
export class HomeModule { }
