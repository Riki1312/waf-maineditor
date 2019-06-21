import { Component, OnInit } from '@angular/core';

import { WafRightpanelSectionbaseComponent } from '../waf-rightpanel-sectionbase/waf-rightpanel-sectionbase.component';
import { PStyle } from '../waf-rightpanel-class/waf-rightpanel-class';

//

const StyleProperty_data: PStyle[] = [
  {
    name: "Color",
    propertyCss: "background-color",
    defaultValue: "transparent",
    value: "transparent"
  },
  {
    name: "Opacity",
    propertyCss: "opacity",
    defaultValue: "1",
    value: "1"
  },
  {
    name: "Image",
    propertyCss: "background-image",
    defaultValue: "none",
    value: "none"
  }
];

//

@Component({
  selector: 'app-waf-rigthsection-e',
  templateUrl: './waf-rigthsection-e.component.html',
  styleUrls: ['./waf-rigthsection-e.component.css']
})
export class WafRigthsectionEComponent implements OnInit {

  panelTitle = "Background";
  styleProperty = StyleProperty_data;

  constructor() {
  }

  ngOnInit() {
  }

}
