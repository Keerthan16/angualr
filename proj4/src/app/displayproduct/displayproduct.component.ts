import { Component, OnInit } from '@angular/core';
import { Product } from '../productinfo/model/model';
import { ProductServices } from '../productinfo/model/productservice';

@Component({
  selector: 'app-displayproduct',
  templateUrl: './displayproduct.component.html',
  styleUrls: ['./displayproduct.component.css']
})
export class DisplayproductComponent implements OnInit {
//injecting services

  constructor(private pservice:ProductServices) { 
    

  }
  pro?:Product[];

  ngOnInit() {
    this.displayproductdetails();

  }
  displayproductdetails(){
    this.pro=this.pservice.getProducts();
  }

}
