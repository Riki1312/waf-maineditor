import { Component, OnInit } from '@angular/core';

import { DataEventsId } from '../../waf-services/waf-main.service';
import { WafDataService, WafEventsName } from '../../waf-services/waf-data.service';

import { WafRightpanelClass, PStyle } from '../waf-rightpanel-class/waf-rightpanel-class';

//

const StyleProperty_data: PStyle[] = [
  {
    name: "Display",
    propertyCss: "display",
    defaultValue: "block",
    value: "block",
    domain: [ "block", "inline", "flex", "grid" ]
  },
  {
    name: "Flex direction",
    propertyCss: "flex-direction",
    defaultValue: "row",
    value: "row",
    domain: [ "row", "column" ]
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
    name: "Flex grow",
    propertyCss: "flex-grow",
    defaultValue: "0",
    value: "0"
  },
  {
    name: "Align self",
    propertyCss: "align-self",
    value: "auto",
    defaultValue: "auto",
    domain: [ "flex-start", "flex-end", "center", "stretch", "baseline" ]
  },
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
    value: "start",
    defaultValue: "start",
    domain: [ "start", "end", "center", "stretch" ]
  },
  {
    name: "Grid column",
    propertyCss: "align-items",
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
    value: "start",
    defaultValue: "start",
    domain: [ "start", "end", "center", "stretch" ]
  },
  {
    name: "Align self",
    propertyCss: "align-self",
    value: "start",
    defaultValue: "start",
    domain: [ "start", "end", "center", "stretch" ]
  },
  {
    name: "Float",
    propertyCss: "float",
    value: "none",
    defaultValue: "none",
    domain: [ "none", "left", "right" ]
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
