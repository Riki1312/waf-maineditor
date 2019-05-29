import { Component, OnInit } from '@angular/core';

import { WafMainService, StylePanelSection } from '../waf-services/waf-main.service';

@Component({
  selector: 'app-waf-rightpanel',
  templateUrl: './waf-rightpanel.component.html',
  styleUrls: ['./waf-rightpanel.component.css']
})
export class WafRightpanelComponent implements OnInit {

  panelSection = StylePanelSection;

  constructor(private MainService: WafMainService) {
  }

  ngOnInit() {
  }

  ShowPanel(code: number) {
    if (this.MainService.SelectedElement.panels)
      return this.MainService.IsPanelSelected(code);
    else
      return false;
  }

}
