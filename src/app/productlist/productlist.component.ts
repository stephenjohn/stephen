import { Component, OnInit } from '@angular/core';
import { Product } from '../product';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-productlist',
  templateUrl: './productlist.component.html',
  styleUrls: ['./productlist.component.css']
})
export class ProductlistComponent implements OnInit {
service:ProductService
productlist:any
amt:number[]=[]
  constructor(service:ProductService) {
    this.service=service
    
   }

  ngOnInit() {
    this.service.getproduct().subscribe(list=>{
      this.productlist=list
      console.log(this.productlist)
    })
  }
addtocart(obj){
this.service.cartarray.push(obj)
console.log(this.service)
console.log(obj)
this.amt.push(obj.price)
console.log(this.amt)
var sum=0
for(let i of this.amt){
  sum=sum+i
  console.log(typeof(i))
}
console.log(sum)
}


}




