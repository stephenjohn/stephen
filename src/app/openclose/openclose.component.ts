import { Component, OnInit } from '@angular/core';
import {trigger,state,transition,style,animate} from '@angular/animations';
@Component({
  selector: 'app-openclose',
  templateUrl: './openclose.component.html',
  styleUrls: ['./openclose.component.css'],
  animations:[trigger("openclose",[
    state('open', style({
      height: '200px',
      opacity: 1,
      backgroundColor: 'yellow'
    })),
    state('closed', style({
      height: '200px',
      opacity: 0.5,
      backgroundColor: 'blue'
    })),

 transition('open => closed', [
      animate('1s')
    ]),
    transition('closed => open', [
      animate('2s')
    ])

  ])]
})
export class OpencloseComponent implements OnInit {
  isopen=true
  constructor() { }

  ngOnInit() {
  }
toggle(){
  this.isopen=!this.isopen
}
}
