import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {
service:ProductService
data:any=[]

  constructor(service:ProductService) {
    this.service=service
   }

  ngOnInit() {
    this.data=this.service.cartarray
  }
  delete(i){
    console.log(this.data)
    this.service.cartarray.splice(this.service.cartarray.indexOf(i,1))
    this.data=this.service.cartarray
    console.log(i)
    console.log(this.data)
  }

}
