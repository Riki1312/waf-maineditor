import { Component, OnInit } from '@angular/core';

import { MatSnackBar } from '@angular/material';

import { DataEventsId } from '../../waf-services/waf-main.service';
import { WafDataService, WafEventsName } from '../../waf-services/waf-data.service';

import { WafRightpanelClass, PStyle } from '../waf-rightpanel-class/waf-rightpanel-class';

//

const StyleProperty_data: PStyle[] = [
  {
    name: "Border style",
    propertyCss: "border-style",
    defaultValue: "solid",
    value: "solid"
  },
  {
    name: "Border width",
    propertyCss: "border-width",
    value: "0",
    defaultValue: "0"
  },
  {
    name: "Border color",
    propertyCss: "border-color",
    value: "#000",
    defaultValue: "#000"
  },
  {
    name: "Border radius",
    propertyCss: "border-radius",
    value: "0",
    defaultValue: "0"
  }
];

//

@Component({
  selector: 'app-waf-rigthsection-m',
  templateUrl: './waf-rigthsection-m.component.html',
  styleUrls: ['./waf-rigthsection-m.component.css']
})
export class WafRigthsectionMComponent implements OnInit {

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