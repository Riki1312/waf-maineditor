import { Component, OnInit } from '@angular/core';

import { DataEventsId } from '../../waf-services/waf-main.service';
import { WafDataService, WafEventsName } from '../../waf-services/waf-data.service';

import { WafRightpanelClass, PStyle } from '../waf-rightpanel-class/waf-rightpanel-class';

//

const StyleProperty_data: PStyle[] = [
  {
    name: "Grid template columns",
    propertyCss: "grid-template-columns",
    value: "auto",
    defaultValue: "auto"
  },
  {
    name: "Grid template rows",
    propertyCss: "grid-template-rows",
    value: "auto",
    defaultValue: "auto"
  },
  {
    name: "Grid gap",
    propertyCss: "grid-gap",
    value: "0",
    defaultValue: "0"
  },
  {
    name: "Justify items",
    propertyCss: "justify-items",
    value: "stretch",
    defaultValue: "stretch",
    domain: [ "start", "end", "center", "stretch" ]
  },
  {
    name: "Align items",
    propertyCss: "align-items",
    value: "stretch",
    defaultValue: "stretch",
    domain: [ "start", "end", "center", "stretch" ]
  },
  {
    name: "Justify content",
    propertyCss: "justify-content",
    value: "stretch",
    defaultValue: "stretch",
    domain: [ "start", "end", "center", "stretch", "space-around", "space-between", "space-evenly" ]
  },
  {
    name: "Align content",
    propertyCss: "align-content",
    value: "stretch",
    defaultValue: "stretch",
    domain: [ "start", "end", "center", "stretch", "space-around", "space-between", "space-evenly" ]
  }
];

//

@Component({
  selector: 'app-waf-rigthsection-i',
  templateUrl: './waf-rigthsection-i.component.html',
  styleUrls: ['./waf-rigthsection-i.component.css']
})
export class WafRigthsectionIComponent implements OnInit {

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