import { Component, OnInit } from '@angular/core';
import {FormBuilder, Validators} from '@angular/forms'
import { from } from 'rxjs';
@Component({
  selector: 'app-validation',
  templateUrl: './validation.component.html',
  styleUrls: ['./validation.component.css']
})
export class ValidationComponent implements OnInit {
profile=this.fb.group({
  name:['',Validators.required],
  email:['',Validators.required],
  password:['',Validators.required]
})

  constructor(private fb:FormBuilder) {
    this.fb=fb
  }

  ngOnInit() {
  }

}
