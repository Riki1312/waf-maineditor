import { Component, OnInit } from '@angular/core';

import { WafMainService, StylePanelSection, ElementsCode } from '../waf-services/waf-main.service';
import { WafDataService } from '../waf-services/waf-data.service';

//

export interface PanelOptions {
  ruleCondition?: string
}

//

@Component({
  selector: 'app-waf-rightpanel',
  templateUrl: './waf-rightpanel.component.html',
  styleUrls: ['./waf-rightpanel.component.css']
})
export class WafRightpanelComponent implements OnInit {

  panelSection = StylePanelSection;

  get classlessElement(): boolean {
    return this.selectedElement.codeElement === ElementsCode.frame;
  }

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

  ShowPanel(code: number, options?: PanelOptions) {
    let condition: boolean;

    if (options && options.ruleCondition && this.DataService.SelectedStyle) {
      let propertyCondition = options.ruleCondition.split(':')[0].trim();
      let valueCondition = options.ruleCondition.split(':')[1].trim();

      condition = this.DataService.SelectedStyle.cssRules.some(
        x => (x.cssProperty === propertyCondition && x.cssValue === valueCondition)
      );
    }
    else condition = true;

    if (this.selectedElement.panels && ((this.DataService.SelectedStyle && condition) || this.classlessElement))
      return this.IsPanelSelected(code);
    else
      return false;
  }

  IsPanelSelected(index: number) {
    let selectedElement = this.selectedElement;
    return (selectedElement.panels.indexOf(index) !== -1)
  }

}
