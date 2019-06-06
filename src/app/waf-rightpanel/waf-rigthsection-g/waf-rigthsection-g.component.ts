import { Component, OnInit } from '@angular/core';

import { DataEventsId } from '../../waf-services/waf-main.service';
import { WafDataService, WafEventsName } from '../../waf-services/waf-data.service';

import { WafRightpanelClass, PStyle } from '../waf-rightpanel-class/waf-rightpanel-class';

//

const StyleProperty_data: PStyle[] = [
  {
    name: "Flex direction",
    propertyCss: "flex-direction",
    defaultValue: "row",
    value: "row",
    domain: [ "row", "column" ]
  },
  {
    name: "Flex wrap",
    propertyCss: "flex-wrap",
    defaultValue: "nowrap",
    value: "nowrap",
    domain: [ "nowrap", "wrap", "wrap-reverse" ]
  },
  {
    name: "Justify content",
    propertyCss: "justify-content",
    defaultValue: "flex-start",
    value: "flex-start",
    domain: [ "flex-start", "flex-end", "center", "space-between", "space-around", "space-evenly" ]
  },
  {
    name: "Align items",
    propertyCss: "align-items",
    defaultValue: "stretch",
    value: "stretch",
    domain: [ "stretch", "flex-start", "flex-end", "center", "baseline" ]
  },
  {
    name: "Align content",
    propertyCss: "align-content",
    defaultValue: "stretch",
    value: "stretch",
    domain: [ "stretch", "flex-start", "flex-end", "center", "space-between", "space-around" ]
  }
];

//

@Component({
  selector: 'app-waf-rigthsection-g',
  templateUrl: './waf-rigthsection-g.component.html',
  styleUrls: ['./waf-rigthsection-g.component.css']
})
export class WafRigthsectionGComponent implements OnInit {

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