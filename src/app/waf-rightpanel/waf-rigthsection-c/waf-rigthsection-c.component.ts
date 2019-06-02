import { Component, OnInit } from '@angular/core';

//

interface PStyle {
  name: string;
  propertyCss: string;
  value?: string;
  domain?: string[];
}

const StyleProperty_data: PStyle[] = [
  {
    name: "Color",
    propertyCss: "color",
    value: "#000"
  },
  {
    name: "Align",
    propertyCss: "text-align",
    value: "left",
    domain: [ "left", "right", "center", "justify" ]
  },
  {
    name: "Font family",
    propertyCss: "font-family",
    value: "Arial"
  },
  {
    name: "Size",
    propertyCss: "font-size",
    value: "medium"
  },
  {
    name: "Decoration",
    propertyCss: "text-decoration",
    value: "none",
    domain: [ "underline", "overline", "line-through" ]
  },
  {
    name: "Transform",
    propertyCss: "text-transform",
    value: "none",
    domain: [ "capitalize", "uppercase", "lowercase" ]
  },
  {
    name: "Font weight",
    propertyCss: "font-weight",
    value: "normal",
    domain: [ "bold", "bolder", "lighter" ]
  },
  {
    name: "Style",
    propertyCss: "font-style",
    value: "normal",
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

  properties: PStyle[] = StyleProperty_data;

  constructor() { }

  ngOnInit() {
  }

  IsColorProperty(item: PStyle) {
    return (item.propertyCss === "color");
  }

}
