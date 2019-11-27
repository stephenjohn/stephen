import { Component, OnInit } from '@angular/core';
import {Customer} from '../customer';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {
    model=new Customer("","","","")
    submitted=false
  constructor() { }

  ngOnInit() {
  }
  save(){
   // this.submitted=true
   console.log(this.model.username)
   console.log(this.model.password)
   console.log(this.model.email)
   console.log(this.model.dob)
  }

}
