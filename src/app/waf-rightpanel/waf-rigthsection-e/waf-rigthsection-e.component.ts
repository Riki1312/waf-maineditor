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
    name: "Opacity",
    propertyCss: "opacity",
    value: "1"
  }
];

@Component({
  selector: 'app-waf-rigthsection-e',
  templateUrl: './waf-rigthsection-e.component.html',
  styleUrls: ['./waf-rigthsection-e.component.css']
})
export class WafRigthsectionEComponent implements OnInit {

  properties: PStyle[] = StyleProperty_data;

  constructor() { }

  ngOnInit() {
  }

  IsColorProperty(item: PStyle) {
    return (item.propertyCss === "color");
  }

}
