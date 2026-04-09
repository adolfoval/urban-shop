import { SlicePipe } from '@angular/common';
import { Component, input, computed } from '@angular/core';
import { RouterLink } from "@angular/router";
import { environment } from '@environment/environment';
import { ProductElement } from '@products/interfaces/product.interface';
import { ProductImagePipe } from '@products/pipes/poduct-image.pipe';

@Component({
  selector: 'app-product-card',
  imports: [RouterLink, SlicePipe, ProductImagePipe],
  templateUrl: './product-card.html',
})
export class ProductCard {
  constructor() {}  

  product = input.required<ProductElement>();
  baseUrl = environment.baseUrl;

  // imageUrl = computed(() =>{
  //   return `${this.baseUrl}/files/product/${this.product().images[0]}`
  // });

  // get ImageUrl(){
  //   return `${this.baseUrl}//files/product/${this.product().images[0]}`
  // }

}
