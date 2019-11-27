import { Component, OnInit } from '@angular/core';
import { Data } from '../data';

@Component({
  selector: 'app-template',
  templateUrl: './template.component.html',
  styleUrls: ['./template.component.css']
})
export class TemplateComponent implements OnInit {
model=new Data("","","")
  constructor() { }

  ngOnInit() {
  }

}
