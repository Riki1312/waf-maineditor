import { Component, OnInit } from '@angular/core';

import { WafRightpanelSectionbaseComponent } from '../waf-rightpanel-sectionbase/waf-rightpanel-sectionbase.component';
import { PStyle } from '../waf-rightpanel-class/waf-rightpanel-class';

//

const StyleProperty_data: PStyle[] = [
  {
    name: "Grid column",
    propertyCss: "grid-column",
    value: "0 / 0",
    defaultValue: "0 / 0"
  },
  {
    name: "Grid row",
    propertyCss: "grid-row",
    value: "0 / 0",
    defaultValue: "0 / 0"
  },
  {
    name: "Justify self",
    propertyCss: "justify-self",
    value: "stretch",
    defaultValue: "stretch",
    domain: [ "start", "end", "center", "stretch" ]
  },
  {
    name: "Align self",
    propertyCss: "align-self",
    value: "stretch",
    defaultValue: "stretch",
    domain: [ "start", "end", "center", "stretch" ]
  }
];

//

@Component({
  selector: 'app-waf-rigthsection-l',
  templateUrl: './waf-rigthsection-l.component.html',
  styleUrls: ['./waf-rigthsection-l.component.css']
})
export class WafRigthsectionLComponent implements OnInit {

  panelTitle = "Layout";
  panelDescription = "Grid items";
  styleProperty = StyleProperty_data;

  constructor() {
  }

  ngOnInit() {
  }

}
