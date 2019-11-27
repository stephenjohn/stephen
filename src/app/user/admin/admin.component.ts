import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { variable } from '@angular/compiler/src/output/output_ast';
@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  adminform=this.fb.group({
    name:['',Validators.required],
    email:['',Validators.compose([
      Validators.required,
      Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')])],
      phoneno:['',Validators.compose([Validators.required,
      Validators.maxLength(10)])],
     addressdata:this.fb.group({
       houseno:['',Validators.required],
       housename:['',Validators.required],
       area:['',Validators.required],
       username:['',Validators.compose([
         Validators.required,
         Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+$')])],
         password:['',Validators.compose([
           Validators.required,
           Validators.pattern('^[a-zA-Z0-9]')])]

     } )

  })


  


  constructor(private fb:FormBuilder) {
    this.fb=fb
   }

  ngOnInit() {
  }

}
