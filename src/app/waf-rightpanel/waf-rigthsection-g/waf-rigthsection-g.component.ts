import { Component, OnInit } from '@angular/core';

import { WafRightpanelSectionbaseComponent } from '../waf-rightpanel-sectionbase/waf-rightpanel-sectionbase.component';
import { PStyle } from '../waf-rightpanel-class/waf-rightpanel-class';

//

const StyleProperty_data: PStyle[] = [
  {
    name: "Flex direction",
    propertyCss: "flex-direction",
    defaultValue: "row",
    value: "row",
    domain: [ "row", "column" ]
  },
  {
    name: "Flex wrap",
    propertyCss: "flex-wrap",
    defaultValue: "nowrap",
    value: "nowrap",
    domain: [ "nowrap", "wrap", "wrap-reverse" ]
  },
  {
    name: "Justify content",
    propertyCss: "justify-content",
    defaultValue: "flex-start",
    value: "flex-start",
    domain: [ "flex-start", "flex-end", "center", "space-between", "space-around", "space-evenly" ]
  },
  {
    name: "Align items",
    propertyCss: "align-items",
    defaultValue: "stretch",
    value: "stretch",
    domain: [ "stretch", "flex-start", "flex-end", "center", "baseline" ]
  },
  {
    name: "Align content",
    propertyCss: "align-content",
    defaultValue: "stretch",
    value: "stretch",
    domain: [ "stretch", "flex-start", "flex-end", "center", "space-between", "space-around" ]
  }
];

//

@Component({
  selector: 'app-waf-rigthsection-g',
  templateUrl: './waf-rigthsection-g.component.html',
  styleUrls: ['./waf-rigthsection-g.component.css']
})
export class WafRigthsectionGComponent implements OnInit {

  panelTitle = "Layout";
  panelDescription = "Flex container";
  styleProperty = StyleProperty_data;

  constructor() {
  }

  ngOnInit() {
  }

}
