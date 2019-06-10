import { Component, OnInit } from '@angular/core';

import { StylePanelSection, ElementsCode } from '../waf-services/waf-main.service';
import { WafDataService } from '../waf-services/waf-data.service';
import { WafFunctionService } from '../waf-services/waf-function.service';

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
      return this.FunctionService.GetElementByCode(this.DataService.SelectedNode.codeElement);
    else
      return this.FunctionService.GetElementByCode(ElementsCode.none);
  }

  //

  constructor(private DataService: WafDataService, private FunctionService: WafFunctionService) {
  }

  ngOnInit() {
  }

  //

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
