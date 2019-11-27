import { Component, OnInit } from '@angular/core';
import { Product } from '../product';

@Component({
  selector: 'app-product-entry',
  templateUrl: './product-entry.component.html',
  styleUrls: ['./product-entry.component.css']
})
export class ProductEntryComponent implements OnInit {
  productid:number
  name:string
  price:number
  description:string
  display(){
    console.log("product:",this.productid)
    console.log("name:",this.name)
    console.log("price:",this.price)
    console.log("description:",this.description)
  
  var obj=new Product(this.productid,this.name,this.price,this.description)
 
  
}
  
  constructor() { }

  ngOnInit() {
  }

}
