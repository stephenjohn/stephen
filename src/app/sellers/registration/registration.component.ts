import { Component, OnInit } from '@angular/core';
import { from } from 'rxjs';
import {FormControl,FormGroup,FormBuilder, Validators} from '@angular/forms';
@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
  //sellervorm=new FormControl
sellerform=this.fb.group({
  name:['',Validators.required],
  item:['',Validators.required],
  licenceno:['',Validators.compose([ Validators.required,
  Validators.minLength(3),Validators.maxLength(10)])],
  personaldata:this.fb.group({
    pname:new FormControl(""), 
    email:['',Validators.compose([
      Validators.required,
      Validators.pattern('^[ @]*@[^ @]*')])],
    phoneno:new FormControl("")
  })
})
 
 
  constructor(private fb:FormBuilder) {
    this.fb=fb
   }

  ngOnInit() {
  }
  
  save(){
console.log(this.sellerform.value)


  }

}
