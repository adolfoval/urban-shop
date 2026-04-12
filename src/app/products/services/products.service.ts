import { HttpClient, HttpParams } from "@angular/common/http";
import { inject, Injectable } from "@angular/core";
import { ProductResponse, ProductElement } from "@products/interfaces/product.interface";
import { Observable, of, tap } from "rxjs";
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

    private productsCache = new Map<string, ProductResponse>();
    private productCache = new Map<string, ProductElement>();

    getProducts(options: Options): Observable<ProductResponse> {

        let params = new HttpParams();
        let keyCach = "";
        const { limit = 9, offset= 0, gender= ""} = options;
        keyCach += `${limit}-${offset}-${gender}`;

        
        Object.entries(options).forEach(([key, value]) => {
            params = params.set(key, value);
        });
        
        
        if(this.productsCache.has(keyCach)) {
            return of(this.productsCache.get(keyCach)!);
        }
        
        console.log(this.productsCache.entries());
        // console.log(params)
        return this.http.get<ProductResponse>(
            `${baseUrl}/products`, {
                params
            }
        ).pipe(
            tap( res => console.log(res)),
            tap( res => this.productsCache.set(keyCach, res)),
        );
    }

    getProductById(idSlug: string): Observable<ProductElement> {
        let keyCach = idSlug;

         if(this.productCache.has(keyCach)) {
            return of(this.productCache.get(keyCach)!);
        }

        console.log(this.productCache.entries());

        return this.http.get<ProductElement>(
            `${baseUrl}/products/${idSlug}`
        ).pipe(
            tap(res => console.log(res)),
            tap(res => this.productCache.set(keyCach, res)),
        )
    }
}