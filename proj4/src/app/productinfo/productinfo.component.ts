import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Product } from './model/model';
import { ProductServices } from './model/productservice';

@Component({
  selector: 'app-productinfo',
  templateUrl: './productinfo.component.html',
  styleUrls: ['./productinfo.component.css']
})
export class ProductinfoComponent implements OnInit {

  constructor(private pser:ProductServices,private route:ActivatedRoute) { }
  pid?:number;
  ngOnInit() {
    this.getSelectedProduct();
  }
selectedpro?: any;
getSelectedProduct()
{

  this.selectedpro=this.pser.getProductInfo(this.route.snapshot.params.id);
}

}
