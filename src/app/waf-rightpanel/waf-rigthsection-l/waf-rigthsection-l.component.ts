import { Component, OnInit } from '@angular/core';

import { MatSnackBar } from '@angular/material';

import { DataEventsId } from '../../waf-services/waf-main.service';
import { WafDataService, WafEventsName } from '../../waf-services/waf-data.service';

import { WafRightpanelClass, PStyle } from '../waf-rightpanel-class/waf-rightpanel-class';

//

const StyleProperty_data: PStyle[] = [
  {
    name: "Grid column",
    propertyCss: "grid-column",
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
    value: "stretch",
    defaultValue: "stretch",
    domain: [ "start", "end", "center", "stretch" ]
  },
  {
    name: "Align self",
    propertyCss: "align-self",
    value: "stretch",
    defaultValue: "stretch",
    domain: [ "start", "end", "center", "stretch" ]
  }
];

//

@Component({
  selector: 'app-waf-rigthsection-l',
  templateUrl: './waf-rigthsection-l.component.html',
  styleUrls: ['./waf-rigthsection-l.component.css']
})
export class WafRigthsectionLComponent implements OnInit {

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