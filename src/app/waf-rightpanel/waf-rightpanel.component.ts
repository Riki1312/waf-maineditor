import { Component, OnInit } from '@angular/core';

import { WafMainService, StylePanelSection } from '../waf-services/waf-main.service';
import { WafDataService } from '../waf-services/waf-data.service';

@Component({
  selector: 'app-waf-rightpanel',
  templateUrl: './waf-rightpanel.component.html',
  styleUrls: ['./waf-rightpanel.component.css']
})
export class WafRightpanelComponent implements OnInit {

  panelSection = StylePanelSection;

  constructor(private MainService: WafMainService, private DataService: WafDataService) {
  }

  ngOnInit() {
  }

  ShowPanel(code: number) {
    let selectedElement = this.DataService.GetElementByCode(this.DataService.SelectedNode.codeElement);

    if (selectedElement.panels)
      return this.IsPanelSelected(code);
    else
      return false;
  }

  IsPanelSelected(index: number) {
    let selectedElement = this.DataService.GetElementByCode(this.DataService.SelectedNode.codeElement);
    return (selectedElement.panels.indexOf(index) !== -1)
  }

}
