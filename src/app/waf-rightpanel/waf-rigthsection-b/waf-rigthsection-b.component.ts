import { Component, OnInit } from '@angular/core';

import { WafRightpanelSectionbaseComponent } from '../waf-rightpanel-sectionbase/waf-rightpanel-sectionbase.component';
import { PStyle } from '../waf-rightpanel-class/waf-rightpanel-class';

//

const StyleProperty_data: PStyle[] = [
  {
    name: "X",
    propertyCss: "left",
    defaultValue: "0px",
    value: "0px"
  },
  {
    name: "Y",
    propertyCss: "top",
    defaultValue: "0px",
    value: "0px",
  },
  {
    name: "Width",
    propertyCss: "width",
    defaultValue: "500px",
    value: "500px"
  },
  {
    name: "Height",
    propertyCss: "height",
    defaultValue: "500px",
    value: "500px"
  },
  {
    name: "Color",
    propertyCss: "background-color",
    defaultValue: "#fffa",
    value: "#fffa"
  }
];

//

@Component({
  selector: 'app-waf-rigthsection-b',
  templateUrl: './waf-rigthsection-b.component.html',
  styleUrls: ['./waf-rigthsection-b.component.css']
})
export class WafRigthsectionBComponent implements OnInit {

  private panelTitle = "Frame";
  private styleProperty = StyleProperty_data;

  constructor() {
  }

  ngOnInit() {
  }

}
