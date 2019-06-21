import { Component, OnInit } from '@angular/core';

import { WafRightpanelSectionbaseComponent } from '../waf-rightpanel-sectionbase/waf-rightpanel-sectionbase.component';
import { PStyle } from '../waf-rightpanel-class/waf-rightpanel-class';

//

const StyleProperty_data: PStyle[] = [
  {
    name: "Order",
    propertyCss: "order",
    defaultValue: "0",
    value: "0"
  },
  {
    name: "Flex grow",
    propertyCss: "flex-grow",
    defaultValue: "0",
    value: "0"
  },
  {
    name: "Align self",
    propertyCss: "align-self",
    value: "auto",
    defaultValue: "auto",
    domain: [ "flex-start", "flex-end", "center", "stretch", "baseline" ]
  }
];

//

@Component({
  selector: 'app-waf-rigthsection-h',
  templateUrl: './waf-rigthsection-h.component.html',
  styleUrls: ['./waf-rigthsection-h.component.css']
})
export class WafRigthsectionHComponent implements OnInit {

  panelTitle = "Layout";
  panelDescription = "Flex items";
  styleProperty = StyleProperty_data;

  constructor() {
  }

  ngOnInit() {
  }

}
