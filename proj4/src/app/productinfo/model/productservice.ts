import { Injectable } from "@angular/core";
import { Product } from "./model";
//decorator for injecting
@Injectable()
export class ProductServices{
    product:Product[]
    constructor()
    {
        this.product=[{pid:11,pname:"pencil",price:10,quantity:19,image:"assets/pencil.jpg",desc:"No discount"},
        {pid:12,pname:"ball",price:290,quantity:5,image:"assets/download (3).jpg",desc:"10% discount"},
        {pid:13,pname:"doll",price:100,quantity:11,image:"assets/doll.jpg",desc:"40% discount"}
        ];
    //store images is assets
    }
    //to fetch data
    getProducts(){
        return this.product;
    }
    //fetch the [articular product details]
    getProductInfo(prodid: number | undefined){
        let pinfo;
        this.product.forEach(ele=>{
            if (ele.pid==prodid){
                pinfo=ele;

            }
        });
        return pinfo;
    }   


}

