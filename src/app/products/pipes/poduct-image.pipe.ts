import {Pipe, PipeTransform} from "@angular/core"
import { environment } from "@environment/environment"

const baseUrl = environment.baseUrl
const assetsUrl = "./assets/images/no-image.jpg"

@Pipe({
    name: "productImage"
})


export class ProductImagePipe implements PipeTransform {
    transform(value: string | Array<string>) {

        if(Array.isArray(value) && value.length > 0){
            return `${baseUrl}/files/product/${value[0]}`;
        
        } else if (typeof value === "string"){
            return `${baseUrl}/files/product/${value}`;
        }

        return assetsUrl;
    }
}