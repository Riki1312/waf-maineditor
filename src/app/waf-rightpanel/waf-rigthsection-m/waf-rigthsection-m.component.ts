import { Component, OnInit } from '@angular/core';

import { WafRightpanelSectionbaseComponent } from '../waf-rightpanel-sectionbase/waf-rightpanel-sectionbase.component';
import { PStyle } from '../waf-rightpanel-class/waf-rightpanel-class';

//

const StyleProperty_data: PStyle[] = [
  {
    name: "Border style",
    propertyCss: "border-style",
    defaultValue: "solid",
    value: "solid"
  },
  {
    name: "Border width",
    propertyCss: "border-width",
    value: "0",
    defaultValue: "0"
  },
  {
    name: "Border color",
    propertyCss: "border-color",
    value: "#000",
    defaultValue: "#000"
  },
  {
    name: "Border radius",
    propertyCss: "border-radius",
    value: "0",
    defaultValue: "0"
  }
];

//

@Component({
  selector: 'app-waf-rigthsection-m',
  templateUrl: './waf-rigthsection-m.component.html',
  styleUrls: ['./waf-rigthsection-m.component.css']
})
export class WafRigthsectionMComponent implements OnInit {

  panelTitle = "Borders";
  styleProperty = StyleProperty_data;

  constructor() {
  }

  ngOnInit() {
  }

}
