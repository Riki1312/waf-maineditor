import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-waf-leftbar',
  templateUrl: './waf-leftbar.component.html',
  styleUrls: ['./waf-leftbar.component.css']
})
export class WafLeftbarComponent implements OnInit {

  @Output() PanelChange = new EventEmitter<number>();

  panelindex: number = -1;

  constructor() { }
  ngOnInit() {
  }

  SetPanelindex(index: number) {
    if (this.panelindex !== index)
      this.panelindex = index;
    else
      this.panelindex = -1;

    this.PanelChange.emit(this.panelindex);
  }

  IsSelected(index: number) {
    if (this.panelindex === -1)
      return false;
    else return this.panelindex === index;
  }

}