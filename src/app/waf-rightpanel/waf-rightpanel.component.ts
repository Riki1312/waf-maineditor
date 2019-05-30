import { Component, OnInit } from '@angular/core';

import { WafMainService, StylePanelSection, ElementsCode } from '../waf-services/waf-main.service';
import { WafDataService } from '../waf-services/waf-data.service';

@Component({
  selector: 'app-waf-rightpanel',
  templateUrl: './waf-rightpanel.component.html',
  styleUrls: ['./waf-rightpanel.component.css']
})
export class WafRightpanelComponent implements OnInit {

  panelSection = StylePanelSection;

  get selectedElement() {
    if (this.DataService.SelectedNode)
      return this.DataService.GetElementByCode(this.DataService.SelectedNode.codeElement);
    else
      return this.DataService.GetElementByCode(ElementsCode.none);
  }

  constructor(private MainService: WafMainService, private DataService: WafDataService) {
  }

  ngOnInit() {
  }

  ShowPanel(code: number) {
    if (this.selectedElement.panels)
      return this.IsPanelSelected(code);
    else
      return false;
  }

  IsPanelSelected(index: number) {
    let selectedElement = this.selectedElement;
    return (selectedElement.panels.indexOf(index) !== -1)
  }

}
