import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-waf-main',
  templateUrl: './waf-main.component.html',
  styleUrls: ['./waf-main.component.css']
})
export class WafMainComponent implements OnInit {

  leftpanel: number = -1;
  rightpanel: number = 0;

  constructor() { }

  ngOnInit() {
  }

  SetLeftpanel(index: number) {
    this.leftpanel = index;
  }

  SetRightpanel(index: number) {
    this.rightpanel = index;
  }

}
