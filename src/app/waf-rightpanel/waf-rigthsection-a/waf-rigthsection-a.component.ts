import { Component, OnInit } from '@angular/core';

import { DataEventsId } from '../../waf-services/waf-main.service';
import { WafDataService, WafEventsName } from '../../waf-services/waf-data.service';

import { WafRightpanelClass, PStyle } from '../waf-rightpanel-class/waf-rightpanel-class';

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
  selector: 'app-waf-rigthsection-a',
  templateUrl: './waf-rigthsection-a.component.html',
  styleUrls: ['./waf-rigthsection-a.component.css']
})
export class WafRigthsectionAComponent implements OnInit {

  properties: PStyle[] = StyleProperty_data;
  panelManager: WafRightpanelClass;

  constructor(private DataService: WafDataService) {
    this.panelManager = new WafRightpanelClass(this.DataService, this.properties);

    this.panelManager.SetupEvent(DataEventsId.rigthsection_a);
  }

  ngOnInit() {
  }

  IsColorProperty(item: PStyle): boolean { return this.panelManager.IsColorProperty(item); }
  
  PropertyChange(item: PStyle): void { this.panelManager.PropertyChange(item); }

}