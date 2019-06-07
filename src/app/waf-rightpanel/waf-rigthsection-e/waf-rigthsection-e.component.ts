import { Component, OnInit } from '@angular/core';

import { MatSnackBar } from '@angular/material';

import { DataEventsId } from '../../waf-services/waf-main.service';
import { WafDataService, WafEventsName } from '../../waf-services/waf-data.service';

import { WafRightpanelClass, PStyle } from '../waf-rightpanel-class/waf-rightpanel-class';

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

@Component({
  selector: 'app-waf-rigthsection-e',
  templateUrl: './waf-rigthsection-e.component.html',
  styleUrls: ['./waf-rigthsection-e.component.css']
})
export class WafRigthsectionEComponent implements OnInit {

  properties: PStyle[] = StyleProperty_data;
  panelManager: WafRightpanelClass;

  constructor(private snackBar: MatSnackBar, private DataService: WafDataService) {
    this.panelManager = new WafRightpanelClass(this.snackBar, this.DataService, this.properties);

    this.panelManager.SetupEvent(DataEventsId.rigthsection_e);
  }

  ngOnInit() {
  }

  IsColorProperty(item: PStyle): boolean { return this.panelManager.IsColorProperty(item); }
  
  PropertyChange(item: PStyle): void { this.panelManager.PropertyChange(item); }

  PropertyKeydown(item: PStyle, event: any): void { this.panelManager.PropertyKeydown(item, event); }

}
