import { HttpClient, HttpParams } from "@angular/common/http";
import { inject, Injectable } from "@angular/core";
import { ProductResponse, ProductElement } from "@products/interfaces/product.interface";
import { Observable, tap } from "rxjs";
import { environment } from "@environment/environment";

const baseUrl = environment.baseUrl;

interface Options {
    limit?: number;
    offset?: number;
    gender?: string;
}

@Injectable({providedIn: "root"})
export class ProductsService {

    private http = inject(HttpClient);

    getProducts(options: Options): Observable<ProductResponse> {

        let params = new HttpParams();

        Object.entries(options).forEach(([key, value]) => {
            params = params.set(key, value);
        });
        
        // console.log(params)
        return this.http.get<ProductResponse>(
            `${baseUrl}/products`, {
                params
            }
        ).pipe(
            tap( res => console.log(res))
        );
    }

    getProductById(idSlug: string): Observable<ProductElement> {
        return this.http.get<ProductElement>(
            `${baseUrl}/products/${idSlug}`
        ).pipe(
            tap(res => console.log(res))
        )
    }
}