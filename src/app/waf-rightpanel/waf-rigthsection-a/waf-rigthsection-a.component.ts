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
    name: "Float",
    propertyCss: "float",
    value: "none",
    defaultValue: "none",
    domain: [ "none", "left", "right" ]
  },
  {
    name: "Position",
    propertyCss: "position",
    value: "static",
    defaultValue: "static",
    domain: [ "static", "relative", "fixed", "absolute", "sticky" ]
  },
  {
    name: "Visibility",
    propertyCss: "visibility",
    value: "visible",
    defaultValue: "visible",
    domain: [ "visible", "hidden", "collapse" ]
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
