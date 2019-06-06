import { Component, OnInit } from '@angular/core';

import { DataEventsId } from '../../waf-services/waf-main.service';
import { WafDataService, WafEventsName } from '../../waf-services/waf-data.service';

import { WafRightpanelClass, PStyle } from '../waf-rightpanel-class/waf-rightpanel-class';

//

const StyleProperty_data: PStyle[] = [
  {
    name: "Margin",
    propertyCss: "margin",
    defaultValue: "initial",
    value: "initial"
  },
  {
    name: "Padding",
    propertyCss: "padding",
    defaultValue: "initial",
    value: "initial"
  },
  {
    name: "Width",
    propertyCss: "width",
    defaultValue: "auto",
    value: "auto"
  },
  {
    name: "Height",
    propertyCss: "height",
    defaultValue: "auto",
    value: "auto"
  },
  {
    name: "overflow",
    propertyCss: "overflow",
    defaultValue: "visible",
    value: "visible",
    domain: [ "hidden", "scroll", "auto" ]
  }
];

//

@Component({
  selector: 'app-waf-rigthsection-f',
  templateUrl: './waf-rigthsection-f.component.html',
  styleUrls: ['./waf-rigthsection-f.component.css']
})
export class WafRigthsectionFComponent implements OnInit {

  properties: PStyle[] = StyleProperty_data;
  panelManager: WafRightpanelClass;

  constructor(private DataService: WafDataService) {
    this.panelManager = new WafRightpanelClass(this.DataService, this.properties);

    this.panelManager.SetupEvent(DataEventsId.rigthsection_f);
  }

  ngOnInit() {
  }

  IsColorProperty(item: PStyle): boolean { return this.panelManager.IsColorProperty(item); }
  
  PropertyChange(item: PStyle): void { this.panelManager.PropertyChange(item); }

  PropertyKeydown(item: PStyle, event: any): void { this.panelManager.PropertyKeydown(item, event); }

}
