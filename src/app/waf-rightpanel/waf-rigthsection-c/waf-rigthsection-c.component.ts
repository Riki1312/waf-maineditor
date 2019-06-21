import { Component, OnInit } from '@angular/core';

import { WafRightpanelSectionbaseComponent } from '../waf-rightpanel-sectionbase/waf-rightpanel-sectionbase.component';
import { PStyle } from '../waf-rightpanel-class/waf-rightpanel-class';

//

const StyleProperty_data: PStyle[] = [
  {
    name: "Color",
    propertyCss: "color",
    defaultValue: "#000",
    value: "#000"
  },
  {
    name: "Align",
    propertyCss: "text-align",
    defaultValue: "left",
    value: "left",
    domain: [ "left", "right", "center", "justify" ]
  },
  {
    name: "Font family",
    propertyCss: "font-family",
    defaultValue: "Arial",
    value: "Arial"
  },
  {
    name: "Size",
    propertyCss: "font-size",
    defaultValue: "medium",
    value: "medium"
  },
  {
    name: "Decoration",
    propertyCss: "text-decoration",
    defaultValue: "none",
    value: "none",
    domain: [ "underline", "overline", "line-through" ]
  },
  {
    name: "Transform",
    propertyCss: "text-transform",
    value: "none",
    defaultValue: "none",
    domain: [ "capitalize", "uppercase", "lowercase" ]
  },
  {
    name: "Font weight",
    propertyCss: "font-weight",
    value: "normal",
    defaultValue: "normal",
    domain: [ "bold", "bolder", "lighter" ]
  },
  {
    name: "Style",
    propertyCss: "font-style",
    value: "normal",
    defaultValue: "normal",
    domain: [ "italic", "oblique" ]
  }
];

//

@Component({
  selector: 'app-waf-rigthsection-c',
  templateUrl: './waf-rigthsection-c.component.html',
  styleUrls: ['./waf-rigthsection-c.component.css']
})
export class WafRigthsectionCComponent implements OnInit {

  panelTitle = "Typography";
  styleProperty = StyleProperty_data;

  constructor() {
  }

  ngOnInit() {
  }

}
