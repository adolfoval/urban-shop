import { Component, Input, inject} from '@angular/core';
import { ProductsService } from '@products/services/products.service';
import { rxResource } from "@angular/core/rxjs-interop"
import { ProductCarousel } from "@products/components/product-carousel/product-carousel";

@Component({
  selector: 'app-product-page',
  imports: [ProductCarousel],
  templateUrl: './product-page.html',
})
export class ProductPage{ 

  @Input("id") productId = "";
  productsService = inject(ProductsService);

    productsResource = rxResource({
        params: () => ({id: this.productId}),
        stream: ({params}) => this.productsService.getProductById(params.id)
    })

  
}
