import { Injectable } from '@angular/core';
import{HttpClient} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  
  http:HttpClient
  cartarray:any[]=[]
  constructor(http:HttpClient) { 
    this.http=http
  }
  getproduct(){
    return this.http.get("http://localhost:4200/assets/product.json")
  }
}
