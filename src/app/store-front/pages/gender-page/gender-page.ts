import { Component, inject } from '@angular/core';
import { rxResource, toSignal } from '@angular/core/rxjs-interop';
import { ActivatedRoute } from '@angular/router';
import { map } from 'rxjs';
import { CommonModule } from "@angular/common";

import { ProductsService } from '@products/services/products.service';
import { ProductCard } from '@products/components/product-card/product-card';

@Component({
  selector: 'app-gender-page',
  imports: [ProductCard, CommonModule],
  templateUrl: './gender-page.html',
})
export class GenderPage {

  route = inject(ActivatedRoute);
  productsServic = inject(ProductsService);

  gender = toSignal(
     this.route.params.pipe(
      map(({ gender }) => gender)
     )
  );

  productsResource = rxResource({
    params: () => ({gender: this.gender()}),
    stream: ({params}) => this.productsServic.getProducts({gender: params.gender})
  });

 }
