import { Component, OnInit } from '@angular/core';

//

interface PStyle {
  name: string;
  propertyCss: string;
  value?: string;
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
    value: "left"
  },
  {
    name: "Decoration",
    propertyCss: "text-decoration",
    value: "none"
  }
];

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

}