import { Component, OnInit, Input } from '@angular/core';

import { MatSnackBar } from '@angular/material';

import { WafMainService, WafStyle } from '../../waf-services/waf-main.service';
import { WafDataService } from '../../waf-services/waf-data.service';

import { WafRightpanelClass, PStyle } from '../waf-rightpanel-class/waf-rightpanel-class';

//

@Component({
  selector: 'app-waf-rightpanel-sectionbase',
  templateUrl: './waf-rightpanel-sectionbase.component.html',
  styleUrls: ['./waf-rightpanel-sectionbase.component.css']
})
export class WafRightpanelSectionbaseComponent implements OnInit {

  @Input() panel_title: string;
  @Input() property_data: PStyle[];

  //

  panelManager: WafRightpanelClass;

  //

  get properties(): PStyle[] {
    return this.property_data.map(x => {
      let style: WafStyle = this.DataService.SelectedStyle;

      for (let rule of style.cssRules)
        if (rule.cssProperty === x.propertyCss) x.value = rule.cssValue;
      
      return x;
    });
  }

  constructor(
    private snackBar: MatSnackBar,
    private MainService: WafMainService,
    private DataService: WafDataService
  ) {
    this.panelManager = new WafRightpanelClass(this.snackBar, this.DataService, this.properties);
  }

  ngOnInit() {
  }

  //

  PropertyChange(cssProperty: string, event: any) {
    let newValue = event.target.value;
    this.DataService.EditStyleRule(this.DataService.SelectedStyle.className, cssProperty, newValue, true);
  }

  IsColorProperty(item: PStyle): boolean { return this.panelManager.IsColorProperty(item); }

  PropertyKeydown(item: PStyle, event: any): void { this.panelManager.PropertyKeydown(item, event); }

}
