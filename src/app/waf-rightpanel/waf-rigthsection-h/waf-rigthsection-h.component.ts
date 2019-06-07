import { Component, OnInit } from '@angular/core';

import { MatSnackBar } from '@angular/material';

import { DataEventsId } from '../../waf-services/waf-main.service';
import { WafDataService, WafEventsName } from '../../waf-services/waf-data.service';

import { WafRightpanelClass, PStyle } from '../waf-rightpanel-class/waf-rightpanel-class';

//

const StyleProperty_data: PStyle[] = [
  {
    name: "Order",
    propertyCss: "order",
    defaultValue: "0",
    value: "0"
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
  }
];

//

@Component({
  selector: 'app-waf-rigthsection-h',
  templateUrl: './waf-rigthsection-h.component.html',
  styleUrls: ['./waf-rigthsection-h.component.css']
})
export class WafRigthsectionHComponent implements OnInit {

  properties: PStyle[] = StyleProperty_data;
  panelManager: WafRightpanelClass;

  constructor(private snackBar: MatSnackBar, private DataService: WafDataService) {
    this.panelManager = new WafRightpanelClass(this.snackBar, this.DataService, this.properties);

    this.panelManager.SetupEvent(DataEventsId.rigthsection_a);
  }

  ngOnInit() {
  }

  IsColorProperty(item: PStyle): boolean { return this.panelManager.IsColorProperty(item); }
  
  PropertyChange(item: PStyle): void { this.panelManager.PropertyChange(item); }

}