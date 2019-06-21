import { Component, OnInit } from '@angular/core';

import { WafRightpanelSectionbaseComponent } from '../waf-rightpanel-sectionbase/waf-rightpanel-sectionbase.component';
import { PStyle } from '../waf-rightpanel-class/waf-rightpanel-class';

//

const StyleProperty_data: PStyle[] = [
  {
    name: "Margin",
    propertyCss: "margin",
    defaultValue: "initial",
    value: "initial"
  },
  {
    name: "Padding",
    propertyCss: "padding",
    defaultValue: "initial",
    value: "initial"
  },
  {
    name: "Width",
    propertyCss: "width",
    defaultValue: "auto",
    value: "auto"
  },
  {
    name: "Height",
    propertyCss: "height",
    defaultValue: "auto",
    value: "auto"
  },
  {
    name: "Min W",
    propertyCss: "min-width",
    defaultValue: "0",
    value: "0"
  },
  {
    name: "Min H",
    propertyCss: "min-height",
    defaultValue: "0",
    value: "0"
  },
  {
    name: "Max W",
    propertyCss: "max-width",
    defaultValue: "none",
    value: "none"
  },
  {
    name: "Max H",
    propertyCss: "max-height",
    defaultValue: "none",
    value: "none"
  },
  {
    name: "Overflow",
    propertyCss: "overflow",
    defaultValue: "visible",
    value: "visible",
    domain: [ "hidden", "scroll", "auto" ]
  }
];

//

@Component({
  selector: 'app-waf-rigthsection-f',
  templateUrl: './waf-rigthsection-f.component.html',
  styleUrls: ['./waf-rigthsection-f.component.css']
})
export class WafRigthsectionFComponent implements OnInit {

  panelTitle = "Spacing and Size";
  styleProperty = StyleProperty_data;

  constructor() {
  }

  ngOnInit() {
  }

}
