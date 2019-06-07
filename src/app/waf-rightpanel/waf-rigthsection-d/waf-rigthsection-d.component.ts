import { Component, OnInit } from '@angular/core';

import { MatSnackBar } from '@angular/material';

import { DataEventsId } from '../../waf-services/waf-main.service';
import { WafDataService, WafEventsName } from '../../waf-services/waf-data.service';

import { WafRightpanelClass, PStyle } from '../waf-rightpanel-class/waf-rightpanel-class';

//

const StyleProperty_data: PStyle[] = [

];

//

@Component({
  selector: 'app-waf-rigthsection-d',
  templateUrl: './waf-rigthsection-d.component.html',
  styleUrls: ['./waf-rigthsection-d.component.css']
})
export class WafRigthsectionDComponent implements OnInit {

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

  PropertyKeydown(item: PStyle, event: any): void { this.panelManager.PropertyKeydown(item, event); }

}