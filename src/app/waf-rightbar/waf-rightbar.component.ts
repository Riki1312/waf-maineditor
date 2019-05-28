import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-waf-rightbar',
  templateUrl: './waf-rightbar.component.html',
  styleUrls: ['./waf-rightbar.component.css']
})
export class WafRightbarComponent implements OnInit {

  @Output() PanelChange = new EventEmitter<number>();

  panelindex: number = 0;

  constructor() { }

  ngOnInit() {
  }

  SetPanelindex(index: number) {
    this.panelindex = index;
    this.PanelChange.emit(this.panelindex);
  }

  IsSelected(index: number) {
    return this.panelindex === index;
  }

}